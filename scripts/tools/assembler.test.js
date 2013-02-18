define(['tools/assembler'], function(Assembler){
  module('Assembler Tests');
  test('Test MOV', function() {
    ok(Assembler('MOV R0, #1') == '00C001', 'MOV R0, #1');
    //ok(assembler('MOV R1, #1') == '01C001', 'MOV R1, #1');
  });
});