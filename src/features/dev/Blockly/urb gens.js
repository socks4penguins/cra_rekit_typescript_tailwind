import Blockly from "blockly";

function objectText(pairs) {
  return `{
   ${pairs
     .filter((item) => item[1].length > 0)
     .map((pair) => keyValueText(pair[0], pair[1], pair[2]))
     .join(",\n")}
  }`;
}

function keyValueText(key, value, type) {
  return `${
    key
      ? `${key}: ${
          value
            ? `${type === "text" ? '"' : ""}${value}${
                type === "text" ? '"' : ""
              }`
            : "null"
        }`
      : ""
  }`;
}

function componentText(name, pairs, children) {
  return `<${name} ${propertiesText(pairs)}>${children}</${name}>`;
}

function propertiesText(pairs) {
  return `${pairs
    .filter((item) => item[1].length > 0)
    .map((pair) => propertyText(pair[0], pair[1], pair[2]))
    .join("\n")}`;
}

function propertyText(key, value, type) {
  return `${
    key
      ? `${key}=${
          value
            ? `${type === "text" ? '"' : ""}${value}${
                type === "text" ? '"' : ""
              }`
            : "null"
        }`
      : ""
  }`;
}



Blockly.JavaScript["test_field_grid_dropdown"] = function (block) {
  var dropdown_fieldname = block.getFieldValue("FIELDNAME");
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_fieldname;
  return code;
};



Blockly.JavaScript["set_state_plus_minus"] = function (block) {
  // Create a list with any number of elements of any type.
  var elements = new Array(block.inputList.length - 1);
  for (var i = 1; i < block.inputList.length; i++) {
    elements[i - 1] =
      block.getFieldValue("key" + (i + 1)) +
      ": " +
      block.getFieldValue("value" + (i + 1));
    // var text_key0 = block.getFieldValue('key0');
    // var text_value0 = block.getFieldValue('value0');

    // Blockly.JavaScript.valueToCode(
    //   block,
    //   "ADD" + i,
    //   Blockly.JavaScript.ORDER_NONE
    // ) || "null";
  }
  var code = "setState({" + elements.join(",\n") + "})";
  return code;
};

Blockly.JavaScript["object"] = function (block) {
  var elements = new Array(block.inputList.length);
  for (var i = 0; i < block.inputList.length; i++) {
    elements[i] =
      Blockly.JavaScript.valueToCode(
        block,
        "ADD" + i,
        Blockly.JavaScript.ORDER_NONE
      ) || "null";
  }
  var code = `{
  ${elements.filter((item) => item !== "null").join(",\n")}
}`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript["lists_create"] = function (block) {
  // Create a list with any number of elements of any type.
  var elements = new Array(block.inputList.length);
  for (var i = 0; i < block.inputList.length; i++) {
    elements[i] =
      Blockly.JavaScript.valueToCode(
        block,
        "ADD" + i,
        Blockly.JavaScript.ORDER_NONE
      ) || "null";
  }
  var code = "[" + elements.join(", ") + "]";
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
