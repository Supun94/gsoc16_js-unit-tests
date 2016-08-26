/**
 * @copyright   Copyright (C) 2005 - 2016 Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 * @package     Joomla
 * @subpackage  JavaScript Tests
 * @since       3.6
 * @version     1.0.0
 */

define(['jquery', 'text!testsRoot/sendtestmail/fixtures/fixture.html', 'libs/sendtestmail', 'libs/core'], function ($, fixture) {
	$('body').append(fixture);

	dummyContent = {
		mailResponses: {
			success: {
				status: 200,
				statusText: 'HTTP/1.1 200 OK',
				responseText: '{"messages": {"message": "text"}}'
			},
			successInvalid: {
				status: 200,
				statusText: 'HTTP/1.1 200 OK',
				responseText: '{"messages": "text"}'
			},
			fail: {
				status: 404,
				statusText: 'HTTP/1.1 404 Not Found',
				responseText: 'Error'
			}
		},
		emailData: {
			smtpauth  : ['smtpauth'],
			smtpuser  : ['smtpuser'],
			smtppass  : ['smtppass'],
			smtphost  : ['smtphost'],
			smtpsecure: ['smtpsecure'],
			smtpport  : ['smtpport'],
			mailfrom  : ['mailfrom'],
			fromname  : ['fromname'],
			mailer    : ['mailer'],
			mailonline: ['mailonline']
		}
	};

	$('#sendtestmail').click(sendTestMail);
});