
define([
  'require', 
  'exports', 
  'chai', 
  './js-build/lib/khepri-lambda',
  './js-build/es_ch2',
  './js-build/es_ch3',
  './js-build/es_ch4'
  ], (function(require, exports, chai, lambda, e2, e3, e4) {
    "use strict";
    
  var expect = chai.expect,
    ch2suite = e2.test2,
    ch3suite = e3.test3,
    ch4suite = e4.test4
    ;
    
  describe('an implementation of lambda calculus in khepri',function(){

    describe('includes chapter 4 stuff',function(){
      for (var testcase in ch4suite){
        (function(tc){
          if (tc.indexOf('skip') === -1) {
            it(tc,function(){
                expect(ch4suite[tc]).to.be.ok;
            });
          } else {
            it.skip(tc,function(){
                expect(ch4suite[tc]).to.be.ok;
            });            
          }
        })(testcase);
      }
    });

    describe('starts with chapter 2 definitions',function(){
      for (var testcase in ch2suite){
        it(testcase,function(){
            expect(ch2suite[testcase]).to.be.ok;
        });
      }
    });

    describe('includes chapter 3 stuff',function(){
      for (var testcase in ch3suite){
        (function(tc){
          if (tc.indexOf('skip') === -1) {
            it(tc,function(){
                expect(ch3suite[tc]).to.be.ok;
            });
          } else {
            it.skip(tc,function(){
                expect(ch3suite[tc]).to.be.ok;
            });            
          }
        })(testcase);
      }
    });

  });
}));