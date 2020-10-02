'use strict';
const path = require('path');
const mimTypes = require('./mime-types.json');

const getMimeType = url => {
	url = url.trim();
	const extension = path.extname(url).toLowerCase();

	if (extension === '') {
		throw new Error('Does not contain valid file extension!');
	}

	return mimTypes[extension];
};

module.exports = url => {
	if (typeof url !== 'string') {
		throw new TypeError('expected a string, got %s', typeof url);
	}

	return getMimeType(url);
};
