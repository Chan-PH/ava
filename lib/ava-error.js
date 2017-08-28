class AvaError extends Error {
	constructor(message) {
		super(message);
		this.name = 'AvaError';
	}
}

module.exports = AvaError;
