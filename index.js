/* jshint esversion: 6 */

const
	utils = require('./util'),
    paths = { hostname: "neppedcord.top" },
    imagesTypes = ['baka', 'cry', 'cuddle', 'dance', 'happy', 'hug', 'kiss', 'pat', 'poke', 'sad', 'smug', 'wag'];

module.exports = function (token) {
	if(!token) return new ReferenceError("[neppedapi-js] Не указан API ключ!");

	let options = (uri, method = "GET", data = null) => {
		if (!uri) return new ReferenceError("[neppedapi-js] Не указан адрес метода.");

		let toRequest = {
			method: method,
			hostname: paths.hostname,
			path: "/api" + uri,
			headers: { 'Authorization': token }
		};
		
		if(data !== null) toRequest.body = data;
		return toRequest;
	};

	this.images = (type) => {
        if(!type || (type && !imagesTypes.includes(type)))
            return console.error(`[neppedapi-js] Не указан тип картинки! [${imagesTypes.join(", ")}]`);

        return utils.request(options(`/images/${type}`))
            .then((r) => r).catch((e) => e);
	};
};
