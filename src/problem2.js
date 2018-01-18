module.exports = async function attempt(funcs) {
	while (true) {
		try {
			return await funcs.shift()();
		} catch(e) {
			if ( funcs.length === 0 ) {
				throw e;
			}
		}
	}
}