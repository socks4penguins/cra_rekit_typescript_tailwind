import React, { useEffect, useState } from "react"
import { Tabs, Tab, Paper } from "@material-ui/core"
import { blockly_toolbox } from "./Blockly/blockly_toolbox"
import Loadable from "react-loadable"
import Loading from "../home/Loading"
import PreviewIframe from "./PreviewIframe"
// import FirestoreSet from "../urb/FirestoreSet";
// import FirestoreGet from "../urb/FirestoreGet";
import { useHistory } from "react-router-dom"
import { gitpodWebsocketHost } from "../../common/utils"
import { useSelector } from "react-redux"
// import PropTypes from 'prop-types';

const BlocklyWorkspace = Loadable({
  loader: () =>
    import("./BlocklyWorkspace" /* webpackChunkName: "BlocklyWorkspace" */),
  loading: Loading,
})
var Socket

function niceFileName(fileName) {
  return fileName.replaceAll(" ", "_")
}

export default function BlocklyBuilder({ match }) {
  const { fileName, project } = match.params
  const history = useHistory()
  const reduxState = useSelector((state) => state)
  const { urb } = reduxState
  const uid = urb.auth && urb.auth.uid
  const [menusData, setMenusData] = useState({})
  const [workspaceQuery, setWorkspaceQuery] = useState(null)
  const [previewQuery, setPreviewQuery] = useState({
    data: { fileName: niceFileName(fileName) },
    dbPath: `user_data/${uid}/dev/preview`,
  })
  const [state, setState] = useState({
    init: false,
    tabs: ["top menu", "left menu", "bottom menu"],
    message: null,
  })
  const [newTab, setNewTab] = useState(null)

  useEffect(() => {
    // console.log("useEffect");
    if (!Socket) {
      Socket = new WebSocket(gitpodWebsocketHost("8080"))
      Socket.onmessage = (e) => {
        setState({ ...state, message: e.data })
      }
    }
    if (!menusData[fileName]) {
      setWorkspaceQuery({
        dbPath: `user_data/${uid}/${project}/${fileName}`,
      })
    }
  }, [fileName, menusData, project, state, uid])

  return (
    <Paper className="urb-blockly-builder fill">
      <div className="urb-blockly-builder horizontal layout fill">
        <div id="leftPane" className="flex-4 vertical layout overflowYHidden">
          <Tabs
            value={fileName}
            onChange={(e, newValue) => {
              setWorkspaceQuery({
                dbPath: `user_data/${uid}/${project}/${fileName}`,
              })
              setNewTab(newValue)
              // after workspace is saved we will change tabs
            }}
          >
            {state.tabs.map((tab, index) => (
              <Tab key={index} label={tab} value={tab}>
                {tab}
              </Tab>
            ))}
          </Tabs>
          <div className="flex overflowYAuto">
            {menusData[fileName] && (
              <BlocklyWorkspace
                debug
                fileName={niceFileName(fileName)}
                message={state.message}
                toolbox={blockly_toolbox}
                workspaceXml={
                  menusData[fileName] && menusData[fileName].workspaceXml
                }
                onUpdate={(data) => {
                  if (
                    menusData[fileName] &&
                    menusData[fileName].workspaceXml !== data.workspaceXml
                  ) {
                    if (data.code.length > 0) {
                      if (Socket.readyState && data.sendCode)
                        Socket.send(
                          JSON.stringify({
                            filename: niceFileName(fileName),
                            content: data.code,
                          })
                        )
                    }
                    setMenusData({
                      ...menusData,
                      [fileName]: data,
                    })
                    // saving workspace is done on tab change
                  }
                }}
              />
            )}
          </div>
        </div>
        <div className="flex-1">
          {/* the iframe is sourced by a separate process that serves another instance of react-scripts start (port 4000) */}
          <PreviewIframe
            url={
              "https://" +
              window.location.hostname.replace("3000", "4000") + // gitpod.io specific
              "/dev/preview"
            }
          />
          {/* data is sent from dev to preview via firestore */}
          {/* {previewQuery && (
            <FirestoreSet
              {...previewQuery}
              onData={(e) => setPreviewQuery(null)}
            />
          )}
          {menusData[fileName] &&
            newTab &&
            menusData[fileName].workspaceXml &&
            workspaceQuery && (
              <FirestoreSet
                {...workspaceQuery}
                onData={(data) => {
                  setWorkspaceQuery(null);
                  history.push(`/dev/blockly_builder/proj/${newTab}`);
                }}
                data={{ workspaceXml: menusData[fileName].workspaceXml }}
              />
            )}
          <FirestoreGet
            dbPath={`user_data/${uid}/${project}/${fileName}`}
            onData={(data) => {
              setMenusData({
                ...menusData,
                [fileName]: data,
              });
              setPreviewQuery({
                // maybe should do this after workspace has sent data and saved ?
                data: { fileName: niceFileName(fileName) },
                dbPath: `user_data/${uid}/dev/preview`,
              });
            }}
          /> */}
        </div>
      </div>
    </Paper>
  )
}

BlocklyBuilder.propTypes = {}
BlocklyBuilder.defaultProps = {}
