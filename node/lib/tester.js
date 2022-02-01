var assert = require('assert');

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

function emailValidation(args) {
	if(typeof args.to !== 'string' || args.to && !validateEmail(args.to)) {
		throw new Error("Validation Error Failure: TO");
	}

	if(typeof args.from !== 'string' || args.from && !validateEmail(args.from)) {
		throw new Error("Validation Error Failure: FROM");
	}

	if(typeof args.subject !== 'string' && typeof args.subject !== 'undefined') {
		throw new Error("Validation Error Failure: SUBJECT");
	}

	if(typeof args.body !== 'string') {
		throw new Error("Validation Error Failure: BODY");
	}

	return true;
}
module.exports.emailValidation = emailValidation;