/**
 * http://usejsdoc.org/
 */
var URL=require('url');
var mongo=require('mongodb');//.mongoClient();
var util=require('util');
var mongoUri='';
var GetData= function(){};
GetData.prototype.getWordFrequency= function(url){
	var option=getUrl(url);
	var lastModified=retrieveUrlData(url);
	if(lastModified==='0000000'){
		//calculateFrequency
	}else{
		var changed=isChanged(option,url);
		if(changed){
			//calculateFrequnecy
		}else{
			//RETRIEVE FFROM DB
		}
	}
}

class StaticClass{
	static getUrl(url){
		if(url===''){
			url='http://www.terriblytinytales.com/test.txt';
		}
		var parseUrl=URL.parse(url);
		return parseUrl;
	}
	static retrieveUrlData(url){
		mongo.connect(monogUri,function(err,db){
			if(err) throw err;
			var dbo=db.db('myDb');
			dbo.collection("cacheUrl").findOne({url:url},function(err,result){
				if(err) throw err;
				if(result.length>0){
					var lastModified=result.lastModified;
					return lastModified;
				}
				return '0000000';
			})
		})
	}
	static isChanged(option,lastModified){
		option.headers["If-Modified-Since"]=lastModified;
		http.get(option,function(err,res){
			if (err) throw err;
			if(res.statusCode==200){
				return true;
			}else{
				return false;
			}
		});
	}
}
module.exports=StaticClass;