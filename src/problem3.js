const negation = require('./problem1');

module.exports = async function first(proms) {
	// return new Promise((resolve, reject) => {

	// 	proms = proms.map( (prom) => {
	// 		return prom
	// 			.then(resolve)
	// 			.catch( x => Promise.resolve(x) );
	// 	});
		
	// 	Promise.all(proms).then(reject);
	// });
	return negation(Promise.all( proms.map(negation) ));
}