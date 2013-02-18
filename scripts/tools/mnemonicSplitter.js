define(function(){
  function MnemonicSplitter(assemblyCode){
    return {name: 'MOV',
      destination: 'R0',
      source: '#1'}
  }
  return MnemonicSplitter;
});