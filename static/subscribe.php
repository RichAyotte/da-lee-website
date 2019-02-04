<?php
/**
 * @Author: Richard Ayotte
 * @Date:   2017-08-05 18:44:56
 * @Last Modified by:   Richard Ayotte
 * @Last Modified time: 2018-01-18 18:03:10
 */

ini_set('allow_url_fopen', 1);

require_once __DIR__ . '/vendor/autoload.php';

$post = json_decode(file_get_contents('php://input'));

$mail = new PHPMailer;
$mail->setFrom('contact@daleegroup.com', 'Da-Lee Website Subscribe Form');
$mail->addAddress('contact@daleegroup.com', 'Da-Lee');

$mail->Subject = 'Subscribe to email list';
$mail->Body = <<<EOT
Please add the following to the email list.

$post->email

EOT;

if (!$mail->send()) {
	http_response_code(500);
	die(json_encode($mail->ErrorInfo));
}

echo json_encode('Message sent!');
