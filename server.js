var http = require('http');
var url = require('url');

function start(route, handle){
	function serverReq(req, res){
		//var postData = '';
		var pathname = url.parse(req.url).pathname;
		console.log('request for ' + pathname + ' received');
		route(handle, pathname, res, req);

		/*req.setEncoding('utf8');

		req.addListener('data', function(postDataChunk){
			postData += postDataChunk;
			console.log('received POST data chunk' + postDataChunk);
		});

		req.addListener('end', function(){
			route(handle, pathname, res, postData);
		})*/
	}

	http.createServer(serverReq).listen(3000, function(){
		console.log('server is running on port 3000');
	});
}

exports.start = start;