var http=require('http');
var regex=require('regex');
var url='';
var option;
//var text='';
 exports.setOption=function(url){
	 if(url===''){
		 option={'invalid':true};
		 return option;
	 }
	 
    url=url.replace(/htt.*:\/\//,'');
    var buf=Buffer.from(url);
    var indexofSlash=buf.indexOf('/');
    if(indexofSlash>1){
        var host = buf.slice(0,indexofSlash);
        var path=buf.slice(indexofSlash,buf.length);
    }
    var option={'host':host.toString(),
        'path':path.toString(),
        'invalid':false
    };
    return option;
};


exports.getTextFromUrl=function(option,callback){
	console.log(option)
	if (option.invalid){
		console('invalid term');
		return;
	}   
	var text='';
	http.get(option,(res)=>{
        console.log(`status:${res.statusCode}`);
        res.on('data',(chunk)=>{
            text+=chunk;
        }).on('end',()=>{
            var z={'status':res.statusCode,'text':text};
            callback(null,z);
        });
    }).on('error',(err)=>{
    	callback(err,null);
    });
};

