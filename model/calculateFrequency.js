var http=require('http');
var url='';
var option;
 exports.setOption=function(url){
	 if(url===''){
		 option={'invalid':true};
		 return option;
	 }
	 
    url=url.replace(/htt.*:\/\//i,'');
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



exports.populateHashMap=function(text,callBack){
	//This function should read the data from text and populate our hashMap
	console.time('SortedHash');
	var map=new SortedMap();
	var index=0;
	while(index<text.length){
		var currentWord='';
		while(true){
			if(index==text.length || text.charAt(index)==' '){
				break;
			}
			currentWord+=(text.charAt(index));
			index++;
		}
		currentWord=currentWord.replace(/[^a-zA-Z'`]+/,'');
		if(currentWord!=''){
		    currentWord=currentWord.toLowerCase();
			if(map.has(currentWord)){
				var value=map.get(currentWord);
				value++;
				map.set(currentWord,value);
			}else{
				map.set(currentWord,1);
			}
		}
		index++;
	
	}
	console.log(map)
	var mapAsc = new Map([...map.entries()].sort());//(a,b) => a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0));
	
	
	console.timeEnd('SortedHash');
	//var iterator=mapAsc.entries();
	//console.log(iterator.next());
		callBack(map);
};

exports.getDataFromhash=function(hashMap,length,callBack){
	var iterator=hashMap.iterate(0,length);
	while(!iterator.done){
		var val=iterator.next();
		console.log(val);
	}
}

var op=this.setOption('http://www.textfiles.com/survival/ewater.txt');
var tect=this.getTextFromUrl(op,function(er,res){
	var text=res.text;
	console.time('SortedHash');
	var map=new  Map();
	var index=0;
	while(index<text.length){
		var currentWord='';
		while(true){
			if(index==text.length || text.charAt(index)==' ' ||text.charAt(index)=='\n'){
				break;
			}
			currentWord+=(text.charAt(index));
			index++;
		}
		currentWord=currentWord.replace(/[^a-zA-Z'`-]+/,'');
		if(currentWord!=''){
		    currentWord=currentWord.toLowerCase();
			if(map.has(currentWord)){
				var value=map.get(currentWord);
				value++;
				map.set(currentWord,value);
			}else{
				map.set(currentWord,1);
			}
		}
		index++;
	
	}
	console.log(map.length)
	var mapAsc = new Map([...map.entries()].sort((a,b)=> a[1] > b[1] ?-1 : a[1] < b[1] ? 1 : 0));
	var iterator=mapAsc.entries();
		
	console.timeEnd('SortedHash');

});	

