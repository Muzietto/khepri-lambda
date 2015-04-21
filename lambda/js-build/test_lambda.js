
define(["require", "exports", 'chai', "./kep-lib/khepri-lambda"], (function(require, exports, chai, l) {
    "use strict";
    
  var expect = chai.expect
  ;
  
  describe('test minimale',function(){
    
    it('mostra la via',function(){
      
      var id = l.id,
          idd = id(id);
      
      expect(idd(12)).to.be.equal(12);    
      
    });

  });
  
}));