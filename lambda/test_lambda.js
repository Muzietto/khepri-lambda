
define([
  'require', 
  'exports', 
  'chai', 
  './js-build/lib/khepri-lambda',
  './js-build/es_ch2',
  './js-build/es_ch3'
  ], (function(require, exports, chai, lambda, e2, e3) {
    "use strict";
    
  var expect = chai.expect,
    ch2suite = e2.test2,
    ch3suite = e3.test3
    ;
    
  describe('an implementation of lambda calculus in khepri',function(){

    describe('starts with chapter 2 definitions',function(){
      for (var testcase in ch2suite){
        it(testcase,function(){
            expect(ch2suite[testcase]).to.be.ok;
        });
      }
    });

    describe('includes chapter 3 stuff',function(){
      for (var testcase in ch3suite){
        it(testcase,function(){
            expect(ch3suite[testcase]).to.be.ok;
        });
      }
    });

  });
}));