module.exports = async function takeFirst(count, ...proms) {
	if ( proms.length === 0 ) return [];

	return new Promise((resolve, reject) => {
		const resolved = [];
		resolved.pushAndCheck = function(x) {
			this.push(x);
			if ( this.length === count ) {
				resolve([...resolved]);
			}
		}
		for (const prom of proms) {
			prom.then( x => resolved.pushAndCheck(x) );
		}
		Promise.all(proms).catch(reject);
	});
}