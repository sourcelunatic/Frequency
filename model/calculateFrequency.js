var http=require('http');
var url='';
var option;
var text='';
 exports.setOption=function(url){
    var buf=Buffer.from(url);
    var indexofSlash=buf.indexOf('/');
    if(indexofSlash>1){
        var host = buf.slice(0,indexofSlash);
        var path=buf.slice(indexofSlash,buf.length);
    }
    var option={'host':host.toString(),
        'path':path.toString()
    };
    return option;
};

function getTextFromUrl(textData){
    http.get(option,(res)=>{
        console.log(`status:${res.statusCode}`);
        res.on('data',(chunk)=>{
            text+=chunk;
        }).on('end',()=>{
            console.log("Done with geting the data from server");
            textData(text);
        });
    }).on('error',(err)=>{
        console.log('Cant connect to server');
    });
};
//option=setOption()