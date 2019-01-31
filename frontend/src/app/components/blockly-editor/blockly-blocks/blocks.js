Blockly.Blocks['move_arm'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Move robot arm to (")
        .appendField(new Blockly.FieldNumber(0), "arm_x")
        .appendField(",")
        .appendField(new Blockly.FieldNumber(0), "arm_y")
        .appendField(").");
    this.appendDummyInput()
        .appendField("Is robot elbow up?")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "isElbowUp");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

// Blockly.JavaScript['move_arm'] = function(block) {
//   var number_arm_x = block.getFieldValue('arm_x');
//   var number_arm_y = block.getFieldValue('arm_y');
//   var checkbox_iselbowup = block.getFieldValue('isElbowUp') == 'TRUE';
//   // TODO: Assemble JavaScript into code variable.
//   var code = '...;\n';
//
//   //generates code representing specified value input
//   var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE',
//     Blockly.JavaScript.ORDER_ASSIGNMENT) || 'NaN';
//   return code;
// };

Blockly.Blocks['move_claw'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Move claw")
        .appendField(new Blockly.FieldTextInput("0"), "distanceBetweenFingersInCentimeters")
        .appendField("centimeters apart");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// Blockly.JavaScript['move_claw'] = function(block) {
//   var text_distancebetweenfingersincentimeters = block.getFieldValue('distanceBetweenFingersInCentimeters');
//   // TODO: Assemble JavaScript into code variable.
//   var code = '...;\n';
//   return code;
// };

Blockly.Blocks['wait'] = {
  init: function() {
    this.appendValueInput("wait")
        .setCheck("Number")
        .appendField("Wait for")
        .appendField(new Blockly.FieldNumber(0), "wait_in_milliseconds")
        .appendField("milliseconds");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

// Blockly.JavaScript['wait'] = function(block) {
//   var number_wait_in_milliseconds = block.getFieldValue('wait_in_milliseconds');
//   var value_wait = Blockly.JavaScript.valueToCode(block, 'wait', Blockly.JavaScript.ORDER_ATOMIC);
//   // TODO: Assemble JavaScript into code variable.
//   var code = '...;\n';
//   return code;
// };
