module.exports = function negation(prom) {
	return new Promise((resolve, reject) => {
		prom.then(reject).catch(resolve);
	});
}