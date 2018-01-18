// const negation = require('./problem1');
module.exports = async function first(proms) {
	return new Promise((resolve, reject) => {

		proms = proms.map( (prom) => {
			return prom
				.then(resolve)
				.catch( x => {
					return Promise.resolve(x);
				});
				// .catch(Promise.resolve);
		});
		
		Promise.all(proms).then(reject);
	});
}