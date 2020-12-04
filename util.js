/* jshint esversion: 6 */

const
	{ stringify } = require('querystring'), 
    { request } = require('https');

function send(params, postData) {
	return new Promise((resolve, reject) => {
		let req = request(params, (res) => {
			res.setEncoding('utf8');
			res.on('data', (data) => resolve( JSON.parse(data) ));
		});

		req.on('error', reject);

		if(postData) req.write(postData);
		req.end();
	});
}

module.exports = {
	request: (params) => {
		if(params.body) {
			let postData = stringify( params.body );
			params.headers['Content-Type'] = 'application/x-www-form-urlencoded';
			params.headers['Content-Length'] = Buffer.byteLength(postData);

			return send(params, postData);
		} else return send(params);
    }
};