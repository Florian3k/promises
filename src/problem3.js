// const negation = require('./problem1');
module.exports = async function first(proms) {
	return new Promise((resolve, reject) => {

		proms = proms.map( (prom) => {
			return prom
				.then(resolve)
				.catch(Promise.resolve.bind(Promise));
		});
		
		Promise.all(proms).then(reject);
	});
}