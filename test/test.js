requirejs.config({
  baseUrl: '../scripts',
  urlArgs: 'bust=' + (new Date().getTime()) /* for debugging only */
});

require(['assembler.test']);