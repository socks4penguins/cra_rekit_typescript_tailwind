import React, { useEffect, useRef, useState } from "react";
import { Checkbox, Typography, IconButton } from "@material-ui/core";
import { useBlocklyWorkspace } from "react-blockly";
import Blockly from "blockly";
import { DisableTopBlocks } from "@blockly/disable-top-blocks";
import DarkTheme from "@blockly/theme-dark";
import { Backpack } from "@blockly/workspace-backpack";
import copy from "copy-to-clipboard";
// import "./Blockly/urb blocks";
// import "./Blockly/urb gens";
import { makeImports } from "../../common/utils";
import { FileCopyOutlined } from "@material-ui/icons";
// import WizardBlocks from "./Blockly/WizardBlocks";
// import PropTypes from 'prop-types';

Blockly.FieldTextInput.prototype.onFinishEditing_ = () => {
  console.log("finished editing");
};

export default function BlocklyWorkspace(props) {
  const {
    message,
    fileName,
    toolbox,
    workspaceXml,
    // code,
    topBlockType,
    // onCode,
    // onWorkspaceXml,
    debug,
    onUpdate,
  } = props;
  const blocklyRef = useRef(null);
  const [sendCode, setSendCode] = useState(false);
  const [evalResult, setEvalResult] = useState(null);
  const [data, setData] = useState({
    workspaceXml,
    fileName,
  });
  const [selectedBlock, setSelectedBlock] = useState(null);

  const { workspace, xml } = useBlocklyWorkspace({
    ref: blocklyRef,
    workspaceConfiguration: {
      theme: DarkTheme,
      zoom: {
        controls: true,
        wheel: true,
        startScale: 1.0,
        maxScale: 3,
        minScale: 0.3,
        scaleSpeed: 1.2,
        pinch: true,
      },
    },
    toolboxConfiguration: toolbox, // this must be a JSON toolbox definition
    initialXml: workspaceXml,
    // '<xml xmlns="https://developers.google.com/blockly/xml"><block type="procedures_defreturn" id="|A0e2pmy4df*RKtRZS.h" x="17" y="92"><field name="NAME">b</field></block></xml>',
    onWorkspaceChange: handleWorkspaceChange,
    onInject: (workspace) => {
      workspace.addChangeListener(Blockly.Events.disableOrphans);

      // The plugin must be initialized before it has any effect.
      const disableTopBlocksPlugin = new DisableTopBlocks();
      disableTopBlocksPlugin.init();
      const backpack = new Backpack(workspace, {
        contextMenu: {
          emptyBackpack: true,
          removeFromBackpack: true,
          copyToBackpack: true,
          copyAllToBackpack: true,
          pasteAllToBackpack: true,
          // disablePreconditionChecks: (boolean|undefined),
        },
      });
      backpack.init();
    },
  });

  useEffect(() => {
    if (data.fileName !== fileName) {
      setData({ ...data, fileName });
      console.log("load", workspaceXml);
      workspace.clear();
      var xml = Blockly.Xml.textToDom(workspaceXml || "<xml></xml>");
      Blockly.Xml.domToWorkspace(xml, workspace);
    }
  }, [data, fileName, workspace, workspaceXml]);

  function evalCode(code) {
    try {
      // eslint-disable-next-line no-eval
      eval(code);
      setEvalResult("no errors");
    } catch (error) {
      setEvalResult("error: " + error);
    }
  }

  function disableTopBlocksIfWrongType(type) {
    var found = false;
    const topBlocks = workspace.getTopBlocks();
    topBlocks.forEach((block) => {
      if (block.type !== type || (block.type === type && found)) {
        block.disabled = true;
        block.initSvg();
      } else if (block.disabled === false) found = true;
    });
  }

  function cleanupCode(code) {
    // fix objects as arguments to function definitions
    var removeVars = [];
    (code.match(/\(_7B\S+/gm) || []).forEach((fieldsString) => {
      // console.log("fieldsString", fieldsString);
      fieldsString = fieldsString.substring(1, fieldsString.length - 1); // remove brackets
      removeVars.push();
      const realString = fieldsString
        .replace("_7B", "{")
        .replace("__", ", ")
        .replace("_7D", "}");
      code = code
        .replace(fieldsString, "")
        .replaceAll(fieldsString, realString);
    });
    // check if vars are empty
    code = code.replace(/var ,*;/g, "");
    // get imports
    const imports = makeImports(code);
    return imports
      ? `import React from "react"
${imports}
${code}
`
      : `${code}`;
  }

  function handleWorkspaceChange() {
    setSelectedBlock(Blockly.selected);
    var xml_dom = Blockly.Xml.workspaceToDom(workspace);
    var xml = Blockly.Xml.domToText(xml_dom);
    if (data.workspaceXml !== xml) {
      if (topBlockType) disableTopBlocksIfWrongType(topBlockType);
      var code = Blockly.JavaScript.workspaceToCode(workspace);
      if (code.length > 0) {
        code = cleanupCode(code);
        setData({ workspaceXml: xml, fileName, code });
        if (data.code !== code)
          onUpdate && onUpdate({ workspaceXml: xml, code, sendCode });
        debug && evalCode(code);
      }
    }
  }

  return (
    <div className="urb-blockly-workspace fill vertical layout">
      <div className="horizontal layout center">
        <Typography variant="body1">Send to ws</Typography>
        <Checkbox value={sendCode} onChange={(_e) => setSendCode(!sendCode)} />
        <Typography variant="body1">{message}</Typography>
        <IconButton
          onClick={(e) =>
            copy(
              data.workspaceXml &&
                data.workspaceXml
                  .replaceAll(/ id="\S+"/gm, "") // remove ids
                  .replace(
                    '<xml xmlns="https://developers.google.com/blockly/xml">',
                    ""
                  )
                  .replace(/<variables>.+variables>/g, "")
                  .replace(/varid="\S+\s/gm, "") // remove varid
                  .replace(/argid="[^>]+/gm, "") // remove argid
                  .replace("</xml>", "")
            )
          }
        >
          <FileCopyOutlined />
        </IconButton>
      </div>
      <div id="injectionDiv" className="flex" ref={blocklyRef} />
      {/* {selectedBlock && (
        <WizardBlocks selectedBlock={selectedBlock} workspace={workspace} />
      )} */}
      {debug && (
        <div className="horizontal layout full-width" style={{ height: "10%" }}>
          <div id="xml" className="flex">
            {data.workspaceXml}
          </div>
          <div id="code" className="flex">
            {data.code}
          </div>
          <div id="evalResult" className="flex">
            {evalResult}
          </div>
        </div>
      )}
    </div>
  );
}

BlocklyWorkspace.propTypes = {};
BlocklyWorkspace.defaultProps = {};
