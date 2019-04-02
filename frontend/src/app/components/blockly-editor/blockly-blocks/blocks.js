Blockly.Blocks['move_arm'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Move robot arm to (")
        .appendField(new Blockly.FieldNumber(0), "armX")
        .appendField(",")
        .appendField(new Blockly.FieldNumber(0), "armY")
        .appendField(").");
    this.appendDummyInput()
        .appendField("Is robot elbow up?")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "isElbowUp");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
  }
};

Blockly.JavaScript['move_arm'] = function(block) {
  var numberArmX = block.getFieldValue('armX');
  var numberArmY = block.getFieldValue('armY');
  var checkboxIsElbowUp = block.getFieldValue('isElbowUp') == 'TRUE';
  // TODO: Assemble JavaScript into code variable.
  var code = 'moveArm(' + numberArmX + ',' + numberArmY + ',' + checkboxIsElbowUp + ');';

  return code;
};

Blockly.Blocks['move_claw'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Move claw")
        .appendField(new Blockly.FieldTextInput("0"), "distanceBetweenFingersInCentimeters")
        .appendField("centimeters apart");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
  }
};

Blockly.JavaScript['move_claw'] = function(block) {
  var distanceBetweenFingersInCentimeters = block.getFieldValue('distanceBetweenFingersInCentimeters');
  // TODO: Assemble JavaScript into code variable.
  var code = 'moveClaw(' + distanceBetweenFingersInCentimeters + ');';
  return code;
};

Blockly.Blocks['wait'] = {
  init: function() {
    this.appendDummyInput("wait")
        .appendField("Wait for")
        .appendField(new Blockly.FieldNumber(0), "waitInSeconds")
        .appendField("seconds");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(100);
  }
};

Blockly.JavaScript['wait'] = function(block) {
  var numberWaitInSeconds = block.getFieldValue('waitInSeconds');
  // TODO: Assemble JavaScript into code variable.
  var code = 'wait(' + numberWaitInSeconds + ');';
  return code;
};
