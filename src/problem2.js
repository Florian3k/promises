module.exports = async function attempt(funcs) {
	while (true) {
		try {
			const func = funcs.shift();
			return await func();
		} catch(e) {
			if ( funcs.length === 0 ) {
				throw e;
			}
		}
	}
}