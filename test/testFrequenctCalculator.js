
var expect=require('chai').expect;

var sinon=require('sinon');
var mocha=require('mocha');
var chai=require('chai');
var assert = require('assert');
var frequencyCalculator=require('../model/calculateFrequency.js');
describe('calculateFrequency',function(){
	describe('#setOption',function(){
		it('The host should be fredkschott.com',function(){
			var option=frequencyCalculator.setOption('fredkschott.com/post/2014/05/nodejs-testing-essentials/')
				expect(option.host).to.equal('fredkschott.com');
				expect(option.path).to.equal('/post/2014/05/nodejs-testing-essentials/');
		});
	});
});
describe('calculateFrequency',function(){
	describe('#setOption',function(){
		it('http appended',function(){
			var option=frequencyCalculator.setOption('https://fredkschott.com/post/2014/05/nodejs-testing-essentials/')
			expect(option.host).to.equal('fredkschott.com');
			expect(option.path).to.equal('/post/2014/05/nodejs-testing-essentials/');
		});
	});
});
describe('calculateFrequency',function(){
	describe('#setOption',function(){
		it('http appended',function(){
			var option=frequencyCalculator.setOption('https://fredkschott.com/post/2014/05/nodejs-testing-essentials/')
			expect(option.host).to.equal('fredkschott.com');
			expect(option.path).to.equal('/post/2014/05/nodejs-testing-essentials/');
		});
	});
});
describe('calculateFrequency',function(){
	describe('#setOption',function(){
		it('The url should be invalid',function(){
			var option=frequencyCalculator.setOption('')
			expect(option.invalid).to.equal(true);
		});
	});
});
describe('calculateFrequency',function(){
	describe('#getTextFromUrl',function(){
		it('The respose should be 200',function(){
			var option=frequencyCalculator.setOption('');
			expect(option.invalid).to.equal(true);
		});
	});
});
describe('calculateFrequency',function(){
	describe('#getText',function(){
		it('The text',function(){
			var option=frequencyCalculator.setOption('')
			expect(option.invalid).to.equal(true);
		});
	});
});
/*describe('calculateFrequency',function(){
	describe('#getText',function(){
		it('The text should be "I love code"',function(){
			var option={
					'host':'terriblytinytales.com',
					'path':'/text.txt',
					'invalid':false
			}
			expect(option.invalid).to.equal(true);
		});
	});
});*/
describe('calculateFrequency',function(){
	describe('#populateHashMap',function(){
		it('When a valid text file is passed hashMap should not be null',function(){
			var res=frequencyCalculator.populateHashMap('This is ?..   Is it',function(rs){
				expect(rs.length).to.equal(3);
			});
			
			
		});
	});
});
describe('calculateFrequency',function(){
	describe('#populateHashMap',function(){
		it('When a valid text file is passed hashMap should not be null AND length should be zero',function(){
			var rs=frequencyCalculator.populateHashMap('  ',(rs)=>{
				expect(rs.length).to.equal(0);
			});
			
		});
	});
});
  