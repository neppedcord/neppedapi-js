/* jshint esversion: 6 */

const
    utils = require('./util'),
    paths = { hostname: "neppedcord.top" },
    imagesTypes = ['baka', 'cry', 'cuddle', 'happy', 'hug', 'kiss', 'sad', 'wag', 'pat', 'poke', 'dance', 'smug'];

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

	this.sharp = {
		check: (id) => {
			if(!id)
				return console.error(`[neppedapi-js] Не указан ID для проверки!`);

			return utils.request(options(`/sharp/user/${id}`))
				.then((r) => r).catch((e) => e);
		},
		ban: (id, body = { reason: null, image: null }) => {
			if(!id)
				return console.error(`[neppedapi-js] Не указан ID для блокировки!`);

			return utils.request(options(`/sharp/user/${id}/ban`, "POST", body))
				.then((r) => r).catch((e) => e);
		},
		unban: (id) => {
			if(!id)
				return console.error(`[neppedapi-js] Не указан ID для разблокировки!`);

			return utils.request(options(`/sharp/user/${id}/unban`, "DELETE"))
				.then((r) => r).catch((e) => e);
		}
	};
};
