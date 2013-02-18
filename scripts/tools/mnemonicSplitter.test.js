define(['tools/mnemonicSplitter'], function(MnemonicSplitter){
  module('Mnemonic Splitter Tests');
  var testMnemonic = function(menmonic, expectedResult){
    test('Split mnemonic "' + menmonic + '"',function(){
      var result = MnemonicSplitter('MOV R0,#1');
      for(var property in expectedResult){
        ok(result[property] === expectedResult[property], property);
      }
    });
  }
  testMnemonic("MOV R0,#1", {
    name: 'MOV',
    destination: 'R0',
    source: '#1'
  });
  testMnemonic("MOV R0,#2", {
    name: 'MOV',
    destination: 'R0',
    source: '#2'
  });
});