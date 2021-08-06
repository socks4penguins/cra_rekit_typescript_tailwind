/* eslint-disable import/no-anonymous-default-export */
import * as Blockly from "blockly";

export function dynamic_block_functions(text, check) {
  return {
    /**
     * Create XML to represent number of text inputs.
     * @return {!Element} XML storage element.
     * @this {Blockly.Block}
     */
    mutationToDom: function () {
      const container = Blockly.utils.xml.createElement("mutation");
      const inputNames = this.inputList.map((input) => input.name).join(",");
      container.setAttribute("inputs", inputNames);
      container.setAttribute("next", this.inputCounter);
      return container;
    },

    /**
     * Parse XML to restore the text inputs.
     * @param {!Element} xmlElement XML storage element.
     * @this {Blockly.Block}
     */
    domToMutation: function (xmlElement) {
      const items = xmlElement.getAttribute("inputs");
      if (items) {
        const inputNames = items.split(",");
        this.inputList = [];
        inputNames.forEach((name) =>
          this.appendValueInput(name).setCheck(check)
        );
        this.inputList[0].appendField(text);
      }
      const next = parseInt(xmlElement.getAttribute("next"));
      this.inputCounter = next;
    },

    /**
     * Check whether a new input should be added and determine where it should go.
     * @param {!Blockly.Connection} connection The connection that has a
     *     pending connection.
     * @return {number} The index before which to insert a new input,
     *     or null if no input should be added.
     */
    getIndexForNewInput: function (connection) {
      if (!connection.targetConnection) {
        // this connection is available
        return null;
      }

      let connectionIndex;
      for (let i = 0; i < this.inputList.length; i++) {
        if (this.inputList[i].connection === connection) {
          connectionIndex = i;
        }
      }

      if (connectionIndex === this.inputList.length - 1) {
        // this connection is the last one and already has a block in it, so
        // we should add a new connection at the end.
        return this.inputList.length + 1;
      }

      const nextInput = this.inputList[connectionIndex + 1];
      const nextConnection = nextInput && nextInput.connection.targetConnection;
      if (nextConnection && !nextConnection.sourceBlock_.isInsertionMarker()) {
        return connectionIndex + 1;
      }

      // Don't add new connection
      return null;
    },

    /**
     * Called when a block is dragged over one of the connections on this block.
     * @param {!Blockly.Connection} connection The connection on this block that
     * has a pending connection.
     */
    onPendingConnection: function (connection) {
      const insertIndex = this.getIndexForNewInput(connection);
      if (insertIndex === null) {
        return;
      }
      this.appendValueInput("ADD" + this.inputCounter++).setCheck(check);
      this.moveNumberedInputBefore(this.inputList.length - 1, insertIndex);
    },

    /**
     * Called when a block drag ends if the dragged block had a pending connection
     * with this block.
     */
    finalizeConnections: function () {
      if (this.inputList.length > this.minInputs) {
        let toRemove = [],
          counter = 0;
        this.inputList.forEach((input) => {
          const targetConnection = input.connection.targetConnection;
          if (!targetConnection) {
            toRemove.push(input.name);
          } else {
            input.name = "ADD" + counter;
            counter++;
          }
        });
        this.itemCount_ = counter; // doesn't update
        if (this.inputList.length - toRemove.length < this.minInputs) {
          // Always show at least two inputs
          toRemove = toRemove.slice(this.minInputs);
        }
        toRemove.forEach((inputName) => this.removeInput(inputName));
        // The first input should have the block text. If we removed the
        // first input, add the block text to the new first input.
        if (this.inputList[0].fieldRow.length === 0) {
          this.inputList[0].appendField(text);
        }
      }
    },
  };
}
