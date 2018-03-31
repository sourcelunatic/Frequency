var express=require("express");
var http=require("http");
var options = {
  host: 'www.terriblytinytales.com',
  path: '/test.txt',
   
};
const fs = require('fs');

var req = http.get(options, (res)=> {
  let  dat='sdas';
  console.log(`STATUS: ${res.statusCode}`);
  console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
   dat += chunk;
   
  });
  res.on('end', () => {
    return dat;
    //console.log('No more data in response.');
  });
}).on('error',(e)=>{
  
  console.log("sds");
});


console.log(req.dat);