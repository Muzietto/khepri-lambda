
function curried(fun){
  var num_args = fun.length;
  var result = function(value){
    if (num_args <= 1){
      return fun(value);
    } else {
      var partial = fun.bind(undefined, value);
      return curried(partial, num_args - 1);
    }
  }
  result.is_curried = true;
  return result;
}

define([
  'require', 
  'exports', 
  'chai', 
  './kep-lib/khepri-lambda',
  './es_ch2'
  ], (function(require, exports, chai, lambda, e2) {
    "use strict";
    
  var expect = chai.expect,
    id = lambda.id,
    apply = lambda.apply,
    second = lambda.second,
    self_apply = lambda.self_apply
    ;
    
  describe('test minimale',function(){
    
    it('mostra la via',function(){
            
      var idd = id(id);
      expect(idd(12)).to.be.equal(12);    
      
    });

    it('es chapter_2',function(){

      var
        aai = apply(apply)(id)
      ;
      expect(second(second)(12)).to.be.equal(12);
      expect(self_apply(second)(12)).to.be.equal(12);

      expect(e2.es23aii(12)).to.be.equal(12);
      expect(aai(12)).to.be.equal(12);
      expect(e2.es23bii(e2.double)(1)).to.be.equal(apply(e2.double)(1));    
      expect(e2.es23cii(12)).to.be.equal(12);

    });
  });
}));