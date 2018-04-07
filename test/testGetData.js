/**
 * http://usejsdoc.org/
 */
var expect=require('chai').expect;
var sinon=require('sinon');
var mocha=require('mocha');
var chai=require('chai');
var assert = require('assert');
var staticClass=require('../model/GetData.js');
describe("Get data",function(){
	describe("parse url",function(){
		var parsedUrl=staticClass.getUrl('df');
		expect(parsedUrl.host).to.equal('www.terriblytinytales.com');
		var parsedUrl=staticClass.getUrl('https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Modified-Since');;
		expect(parsedUrl.host).to.equal('developer.mozilla.org');
		
	})
})