
require.config({
  'paths': {
    'mocha': './js-lib/mocha',
    'chai': './js-lib/chai',
    'sinon': './js-lib/sinon-1.11.1'
  },
  shim: {
    'mocha': {
        init: function () {
            this.mocha.setup('bdd');
            return this.mocha;
        }
    }
  }
});

define(['chai', 'mocha'], (function(chai, mocha) {
    require(['./test_lambda'], function(require) {
      mocha.run();
    });
}));
