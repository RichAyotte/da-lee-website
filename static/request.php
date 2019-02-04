<?php

/**
 * @Author: Richard Ayotte
 * @Date:   2017-08-05 18:44:56
 * @Last Modified by:   Richard Ayotte
 * @Last Modified time: 2018-01-18 18:07:09
 */

ini_set('allow_url_fopen', 1);

require_once __DIR__ . '/vendor/autoload.php';

function prefixWithDash($value) {
	return "- $value";
}

$post = json_decode(file_get_contents('php://input'));
$secret = '6LdBAQETAAAAANSrLwfSFQy82x3fIN6uedMEOqu7';

$recaptcha = new \ReCaptcha\ReCaptcha($secret);
$recaptchaResponse = $recaptcha->verify($post->recaptchaToken, $_SERVER['REMOTE_ADDR']);
if (!$recaptchaResponse->isSuccess()) {
	http_response_code(401);
	die(json_encode($recaptchaResponse->getErrorCodes()));
}

$checkedRequestOptions = implode(
	"\n"
	, array_map('prefixWithDash', $post->checkedRequestOptions)
);

$mail = new PHPMailer;
$mail->setFrom($post->email, $post->fullName);
$mail->addAddress('contact@daleegroup.com', 'Da-Lee');
$mail->Subject = 'Request Info';
$mail->Body = <<<EOT

Contact
=======
$post->fullName
$post->companyName
$post->email
$post->phone

Address
=======
$post->addressLine1
$post->addressCity
$post->addressProvince
$post->addressPostalCode

Request Info
============
$checkedRequestOptions

$post->message
EOT;

if (!$mail->send()) {
	http_response_code(500);
	die(json_encode($mail->ErrorInfo));
}

echo json_encode('Message sent!');
