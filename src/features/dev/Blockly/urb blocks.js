import * as Blockly from "blockly";
import { FieldSlider } from "@blockly/field-slider";
import "@blockly/block-plus-minus";
import { dynamic_block_functions } from "./dynamic_block_functions";
import { FieldGridDropdown } from "@blockly/field-grid-dropdown";
import "./insertion_marker_manager_monkey_patch"; // needed for dynamic connections

import { createPlusField } from "@blockly/block-plus-minus/src/field_plus";
import { createMinusField } from "@blockly/block-plus-minus/src/field_minus";

/* eslint-disable quotes */
Blockly.defineBlocksWithJsonArray([
  {
    type: "keys_values_plus_minus",
    message0: "keys / values %1",
    // lastDummyAlign0: "CENTRE",
    args0: [
      {
        type: "input_dummy",
        name: "EMPTY",
      },
    ],
    output: "key value",
    style: "list_blocks",
    helpUrl: "%{BKY_LISTS_CREATE_WITH_HELPURL}",
    tooltip: "%{BKY_LISTS_CREATE_WITH_TOOLTIP}",
    mutator: "keys_values_mutator",
  },
]);
/* eslint-enable quotes */

const keysValuesMutator = {
  /**
   * Number of item inputs the block has.
   * @type {number}
   */
  itemCount_: 1,

  /**
   * Creates XML to represent number of text inputs.
   * @return {!Element} XML storage element.
   * @this {Blockly.Block}
   */
  mutationToDom: function () {
    const container = Blockly.utils.xml.createElement("mutation");
    container.setAttribute("items", this.itemCount_);
    return container;
  },
  /**
   * Parses XML to restore the text inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this {Blockly.Block}
   */
  domToMutation: function (xmlElement) {
    const targetCount = parseInt(xmlElement.getAttribute("items"), 10);
    this.updateShape_(targetCount);
  },

  /**
   * Adds inputs to the block until it reaches the target number of inputs.
   * @param {number} targetCount The target number of inputs for the block.
   * @this {Blockly.Block}
   * @private
   */
  updateShape_: function (targetCount) {
    while (this.itemCount_ < targetCount) {
      this.addPart_();
    }
    while (this.itemCount_ > targetCount) {
      this.removePart_();
    }
    this.updateMinus_();
  },

  /**
   * Callback for the plus image. Adds an input to the end of the block and
   * updates the state of the minus.
   */
  plus: function () {
    this.addPart_();
    this.updateMinus_();
  },

  /**
   * Callback for the minus image. Removes an input from the end of the block
   * and updates the state of the minus.
   */
  minus: function () {
    if (this.itemCount_ === 0) {
      return;
    }
    this.removePart_();
    this.updateMinus_();
  },

  // To properly keep track of indices we have to increment before/after adding
  // the inputs, and decrement the opposite.
  // Because we want our first input to be ADD0 (not ADD1) we increment after.

  /**
   * Adds an input to the end of the block. If the block currently has no
   * inputs it updates the top 'EMPTY' input to receive a block.
   * @this {Blockly.Block}
   * @private
   */
  addPart_: function () {
    if (this.itemCount_ === 1) {
      this.removeInput("EMPTY");
      this.topInput_ = this.appendDummyInput("ADD" + this.itemCount_)
        .appendField(createPlusField(), "PLUS")
        .appendField("keys / values");
    } else {
      this.appendDummyInput("ADD" + this.itemCount_)
        .appendField(new Blockly.FieldTextInput(""), "key" + this.itemCount_)
        .appendField(":")
        .appendField(new Blockly.FieldTextInput(""), "value" + this.itemCount_);
    }
    this.itemCount_++;
  },

  /**
   * Removes an input from the end of the block. If we are removing the last
   * input this updates the block to have an 'EMPTY' top input.
   * @this {Blockly.Block}
   * @private
   */
  removePart_: function () {
    this.itemCount_--;
    this.removeInput("ADD" + this.itemCount_);
    if (this.itemCount_ == 1) {
      this.topInput_ = this.appendDummyInput("EMPTY")
        .appendField(createPlusField(), "PLUS")
        .appendField("empty state");
    }
  },

  /**
   * Makes it so the minus is visible iff there is an input available to remove.
   * @private
   */
  updateMinus_: function () {
    const minusField = this.getField("MINUS");
    if (!minusField && this.itemCount_ > 1) {
      this.topInput_.insertFieldAt(1, createMinusField(), "MINUS");
    } else if (minusField && this.itemCount_ < 2) {
      this.topInput_.removeField("MINUS");
    }
  },
};

/**
 * Updates the shape of the block to have 3 inputs if no mutation is provided.
 * @this {Blockly.Block}
 */
const plusMinusHelper = function () {
  this.getInput("EMPTY").insertFieldAt(0, createPlusField(), "PLUS");
  this.updateShape_(3);
};

Blockly.Extensions.registerMutator(
  "keys_values_mutator",
  keysValuesMutator,
  plusMinusHelper
);

Blockly.Blocks["test_field_grid_dropdown"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("grid dropdown: ")
      .appendField(
        new FieldGridDropdown([
          ["A", "A"],
          ["B", "B"],
          ["C", "C"],
          ["D", "D"],
          ["E", "E"],
          ["F", "F"],
          ["G", "G"],
          ["H", "H"],
        ]),
        "FIELDNAME"
      );
  },
};

/* eslint-disable quotes */
Blockly.defineBlocksWithJsonArray([
  {
    type: "set_state_plus_minus",
    message0: "%{BKY_LISTS_CREATE_EMPTY_TITLE} %1",
    args0: [
      {
        type: "input_dummy",
        name: "EMPTY",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    style: "list_blocks",
    helpUrl: "%{BKY_LISTS_CREATE_WITH_HELPURL}",
    tooltip: "%{BKY_LISTS_CREATE_WITH_TOOLTIP}",
    mutator: "set_state_mutator",
  },
]);
/* eslint-enable quotes */

const setStateMutator = {
  /**
   * Number of item inputs the block has.
   * @type {number}
   */
  itemCount_: 1,

  /**
   * Creates XML to represent number of text inputs.
   * @return {!Element} XML storage element.
   * @this {Blockly.Block}
   */
  mutationToDom: function () {
    const container = Blockly.utils.xml.createElement("mutation");
    container.setAttribute("items", this.itemCount_);
    return container;
  },
  /**
   * Parses XML to restore the text inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this {Blockly.Block}
   */
  domToMutation: function (xmlElement) {
    const targetCount = parseInt(xmlElement.getAttribute("items"), 10);
    this.updateShape_(targetCount);
  },

  /**
   * Adds inputs to the block until it reaches the target number of inputs.
   * @param {number} targetCount The target number of inputs for the block.
   * @this {Blockly.Block}
   * @private
   */
  updateShape_: function (targetCount) {
    while (this.itemCount_ < targetCount) {
      this.addPart_();
    }
    while (this.itemCount_ > targetCount) {
      this.removePart_();
    }
    this.updateMinus_();
  },

  /**
   * Callback for the plus image. Adds an input to the end of the block and
   * updates the state of the minus.
   */
  plus: function () {
    this.addPart_();
    this.updateMinus_();
  },

  /**
   * Callback for the minus image. Removes an input from the end of the block
   * and updates the state of the minus.
   */
  minus: function () {
    if (this.itemCount_ === 0) {
      return;
    }
    this.removePart_();
    this.updateMinus_();
  },

  // To properly keep track of indices we have to increment before/after adding
  // the inputs, and decrement the opposite.
  // Because we want our first input to be ADD0 (not ADD1) we increment after.

  /**
   * Adds an input to the end of the block. If the block currently has no
   * inputs it updates the top 'EMPTY' input to receive a block.
   * @this {Blockly.Block}
   * @private
   */
  addPart_: function () {
    if (this.itemCount_ === 1) {
      this.removeInput("EMPTY");
      this.topInput_ = this.appendDummyInput("ADD" + this.itemCount_)
        .appendField(createPlusField(), "PLUS")
        .appendField("set state");
    } else {
      this.appendDummyInput("ADD" + this.itemCount_)
        .appendField(new Blockly.FieldTextInput(""), "key" + this.itemCount_)
        .appendField(":")
        .appendField(new Blockly.FieldTextInput(""), "value" + this.itemCount_);
    }
    this.itemCount_++;
  },

  /**
   * Removes an input from the end of the block. If we are removing the last
   * input this updates the block to have an 'EMPTY' top input.
   * @this {Blockly.Block}
   * @private
   */
  removePart_: function () {
    this.itemCount_--;
    this.removeInput("ADD" + this.itemCount_);
    if (this.itemCount_ == 1) {
      this.topInput_ = this.appendDummyInput("EMPTY")
        .appendField(createPlusField(), "PLUS")
        .appendField("empty state");
    }
  },

  /**
   * Makes it so the minus is visible iff there is an input available to remove.
   * @private
   */
  updateMinus_: function () {
    const minusField = this.getField("MINUS");
    if (!minusField && this.itemCount_ > 1) {
      this.topInput_.insertFieldAt(1, createMinusField(), "MINUS");
    } else if (minusField && this.itemCount_ < 2) {
      this.topInput_.removeField("MINUS");
    }
  },
};

/**
 * Updates the shape of the block to have 3 inputs if no mutation is provided.
 * @this {Blockly.Block}
 */
const setStateHelper = function () {
  this.getInput("EMPTY").insertFieldAt(0, createPlusField(), "PLUS");
  this.updateShape_(3);
};

Blockly.Extensions.registerMutator(
  "set_state_mutator",
  setStateMutator,
  setStateHelper
);

Blockly.Blocks["object"] = {
  /**
   * Counter for the next input to add to this block.
   * @type {number}
   */
  inputCounter: 2,

  /**
   * Minimum number of inputs for this block.
   * @type {number}
   */
  minInputs: 2,

  /**
   * Block for concatenating any number of strings.
   * @this {Blockly.Block}
   */

  init: function () {
    this.appendValueInput("ADD0").setCheck("key value").appendField("object");
    this.appendValueInput("ADD1").setCheck("key value");
    this.setOutput(true, "object");
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
  mutationToDom: dynamic_block_functions("object", "key value").mutationToDom,
  domToMutation: dynamic_block_functions("object", "key value").domToMutation,
  getIndexForNewInput: dynamic_block_functions("object", "key value")
    .getIndexForNewInput,
  onPendingConnection: dynamic_block_functions("object", "key value")
    .onPendingConnection,
  finalizeConnections: dynamic_block_functions("object", "key value")
    .finalizeConnections,
};



Blockly.Blocks["lists_create"] = {
  /**
   * Counter for the next input to add to this block.
   * @type {number}
   */
  inputCounter: 2,

  /**
   * Minimum number of inputs for this block.
   * @type {number}
   */
  minInputs: 2,

  /**
   * Block for concatenating any number of strings.
   * @this {Blockly.Block}
   */
  init: function () {
    this.setHelpUrl(Blockly.Msg["LISTS_CREATE_WITH_HELPURL"]);
    this.setStyle("list_blocks");
    this.appendValueInput("ADD0").appendField(
      Blockly.Msg["LISTS_CREATE_WITH_INPUT_WITH"]
    );
    this.appendValueInput("ADD1");
    this.setOutput(true, "Array");
    this.setTooltip(Blockly.Msg["LISTS_CREATE_WITH_TOOLTIP"]);
  },
  mutationToDom: dynamic_block_functions(
    Blockly.Msg["LISTS_CREATE_WITH_INPUT_WITH"],
    null
  ).mutationToDom,
  domToMutation: dynamic_block_functions(
    Blockly.Msg["LISTS_CREATE_WITH_INPUT_WITH"],
    null
  ).domToMutation,
  getIndexForNewInput: dynamic_block_functions(
    Blockly.Msg["LISTS_CREATE_WITH_INPUT_WITH"],
    null
  ).getIndexForNewInput,
  onPendingConnection: dynamic_block_functions(
    Blockly.Msg["LISTS_CREATE_WITH_INPUT_WITH"],
    null
  ).onPendingConnection,
  finalizeConnections: dynamic_block_functions(
    Blockly.Msg["LISTS_CREATE_WITH_INPUT_WITH"],
    null
  ).finalizeConnections,
};

