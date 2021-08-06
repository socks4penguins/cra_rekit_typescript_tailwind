import React, { useEffect, useRef, useState } from "react";
import BlocklyComponent from "./Blockly";
import Blockly from "blockly";
import BlocklyJS from "blockly/javascript";
import "./Blockly/urb blocks";
import "./Blockly/urb gens";
import { gitpodWebsocketHost, makeImports } from "../../common/utils";
import { blockly_toolbox } from "./Blockly/blockly_toolbox";

var Socket;

export default function BlocklyWorkspace(props) {
  const blocklyRef = useRef(null);
  const [message, setMessage] = useState(null);
  const [code, setCode] = useState(null);
  const [evalResult, setEvalResult] = useState(null);
  const [workspaceXML, setworkspaceXML] = useState(null);

  useEffect(() => {
    if (!Socket) {
      Socket = new WebSocket(gitpodWebsocketHost("8080"));
      Socket.onmessage = (e) => {
        // console.log(e);
        setMessage(e.data);
      };
    }
  }, []);

  // const { workspace, xml } = useBlocklyWorkspace({
  //   ref: blocklyRef,
  //   toolboxConfiguration: props.toolbox, // this must be a JSON toolbox definition
  //   initialXml: props.workspaceXml || workspaceXML,
  //   onWorkspaceChange: handleWorkspaceChange,
  // });

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
    const topBlocks = blocklyRef.current.workspace.getTopBlocks();
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
      console.log("fieldsString", fieldsString);
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
    return `${imports}
    
${code}`;
  }

  function handleWorkspaceChange(data) {
    // if (props.topBlockType) disableTopBlocksIfWrongType(props.topBlockType);
    var newCode = BlocklyJS.workspaceToCode(blocklyRef.current.workspace);
    if (newCode !== code) {
      newCode = cleanupCode(newCode);
      setCode(newCode);
      props.onCode && props.onCode(newCode);
      // write to file via websocket server
      if (props.writeToFile && newCode.length > 0) {
        console.log(props.writeToFile, { Socket });
        if (Socket.readyState)
          Socket.send(
            JSON.stringify({
              filename: props.writeToFile,
              content: newCode,
            })
          );
      }
      props.debug && evalCode(newCode);
    }
    var xml = Blockly.Xml.workspaceToDom(blocklyRef.current.workspace);
    setworkspaceXML(Blockly.Xml.domToText(xml));
    props.onWorkspaceXml && props.onWorkspaceXml(xml);
  }

  function generateCode() {
    var code = BlocklyJS.workspaceToCode(blocklyRef.current.workspace);
    console.log(code);
  }

  return (
    <div className="urb-blockly-workspace">
      <button onClick={generateCode}>Convert</button>
      <BlocklyComponent
        ref={blocklyRef}
        readOnly={false}
        trashcan={true}
        pathToMedia={"media/"}
        move={{
          scrollbars: true,
          drag: true,
          wheel: true,
        }}
        toolbox={blockly_toolbox}
        initialXml={`
<xml xmlns="http://www.w3.org/1999/xhtml">
<block type="controls_ifelse" x="0" y="0"></block>
</xml>
      `}
      >
        {/* <Block type="test_react_field" />
            <Block type="test_react_date_field" /> */}
        {/* <Block type="list_create" />
        <Block type="controls_ifelse" />
        <Block type="logic_compare" />
        <Block type="logic_operation" /> */}
        {/*<Block type="controls_repeat_ext">
          <Value name="TIMES">
            <Shadow type="math_number">
              <Field name="NUM">10</Field>
            </Shadow>
          </Value>
        </Block>
        <Block type="logic_operation" />
        <Block type="logic_negate" />
        <Block type="logic_boolean" />
        <Block type="logic_null" disabled="true" />
        <Block type="logic_ternary" />
        <Block type="text_charAt">
          <Value name="VALUE">
            <Block type="variables_get">
              <Field name="VAR">text</Field>
            </Block>
          </Value>
        </Block> */}
      </BlocklyComponent>
    </div>
  );
}

BlocklyWorkspace.propTypes = {};
BlocklyWorkspace.defaultProps = {};
