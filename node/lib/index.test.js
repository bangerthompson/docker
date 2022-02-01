const mochaLib = require("@simpleview/mochalib");
const assert = require("assert");
const myValidators = require('./tester.js');

describe(__filename, function() {
	describe("nicks email validation test", function() {
		const tests = [
			{
				name : "Test expected simple all valid",
				args : {
					input : {
						to: 'test@totest.com',
						from: 'testfrom@test.com',
						subject: 'My Subject',
						body: 'I have body content.',
					},
					output : true
				}
			},
			{
				name : "Test Missing TO",
				args : {
					input : {
						from: 'testfrom@test.com',
						subject: 'My Subject',
						body: 'I have body content.',
					},
					output : "Validation Error Failure: TO"
				}
			},
			{
				name : "Test Missing FROM",
				args : {
					input : {
						to: 'test@totest.com',
						subject: 'My Subject',
						body: 'I have body content.',
					},
					output : "Validation Error Failure: FROM"
				}
			},
			{
				name : "Test Missing SUBJECT",
				args : {
					input : {
						to: 'test@totest.com',
						from: 'testfrom@test.com',
						body: 'I have body content.',
					},
					output : true
				}
			},
			{
				name : "Test Missing Body",
				args : {
					input : {
						to: 'test@totest.com',
						from: 'testfrom@test.com',
						subject: 'My Subject',
					},
					output : "Validation Error Failure: BODY"
				}
			},
			{
				name : "Test Extra key",
				args : {
					input : {
						extrakey: 'extra and not used',
						to: 'test@totest.com',
						from: 'testfrom@test.com',
						subject: 'My Subject',
						body: 'I have body content.',
					},
					output : true
				}
			},
			{
				name : "Test No Keys",
				args : {
					input : {},
					output : "Validation Error Failure: TO"
				}
			},
			{
				name : "Test Bad TO Email",
				args : {
					input : {
						to: 'totest.com',
						from: 'testfrom@test.com',
						subject: 'My Subject',
						body: 'I have body content.',
					},
					output : "Validation Error Failure: TO"
				}
			},
			{
				name : "Test Bad FROM Email",
				args : {
					input : {
						to: 'test@totest.com',
						from: 'testfrom',
						subject: 'My Subject',
						body: 'I have body content.',
					},
					output : "Validation Error Failure: FROM"
				}
			},
			{
				name : "Test Bad Subject Type",
				args : {
					input : {
						to: 'test@totest.com',
						from: 'testfrom@test.com',
						subject: 12,
						body: 'I have body content.',
					},
					output : "Validation Error Failure: SUBJECT"
				}
			},
			{
				name : "Test Bad Body Type",
				args : {
					input : {
						to: 'test@totest.com',
						from: 'testfrom@test.com',
						subject: 'My Subject',
						body: 0,
					},
					output : "Validation Error Failure: BODY"
				}
			},
		]

		mochaLib.testArray(tests, function(test) {
			try {
				let myReturn = myValidators.emailValidation(test.input);
				assert.strictEqual(myReturn, test.output);
			} catch(e) {
				assert.ok(e.message.match(test.output));
				// console.log('error', e.message);
			}
		});
	});
});
