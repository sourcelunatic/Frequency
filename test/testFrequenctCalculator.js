var frequencyCalculator=require('../model/calculateFrequency.js');
var expect=require('chai').expect;
  /*  var responseStatus=frequencyCalculator.isValidUrl("sdfhlsdlkf");
            expect(responseStatus).to.equal(404);
        responseStatus=frequencyCalculator.isValidUrl("www.google.com");
            expect(responseStatus).to.equal(200);
        responseStatus=frequencyCalculator.isValidUrl("");
            expect(responseStatus).to.equal(404);
    var discription=frequencyCalculator.getDiscription();
        expect(discription.uniqueWordCount).to.equal();
        expect(discription.totalWordCount)*/
    var option=frequencyCalculator.setOption('fredkschott.com/post/2014/05/nodejs-testing-essentials/');
        // AssertionError: expected 43 to equal 42.
        expect(option.host).to.equal('fredkschott.com');
        expect(option.path).to.equal('/post/2014/05/nodejs-testing-essentials/');