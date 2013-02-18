requirejs.config({
  baseUrl: '../scripts',

  paths: {
    underscore: '../libraries/underscore/underscore',
    backbone: '../libraries/backbone/backbone'
  },

  shim: {
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ["underscore", "jquery"],
      exports: "Backbone"
    }
  },

  urlArgs: 'bust=' + (new Date().getTime()) /* for debugging only */
});