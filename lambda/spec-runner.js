
require.config({
  'paths': {
    'mocha': './js-build/js-lib/mocha',
    'chai': './js-build/js-lib/chai',
    'sinon': './js-build/js-lib/sinon-1.11.1'
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
    require(['./js-build/test_lambda'], function(require) {
      mocha.run();
    });
}));
