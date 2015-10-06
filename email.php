<?php

$send_to = "denis@kishinevsky.ca";
$send_subject = "test";



/*Be careful when editing below this line */

$f_name = cleanupentries($_POST["firstname"]);
$f_company = cleanupentries($_POST["companyname"]);
$f_email = cleanupentries($_POST["email"]);
$f_phone = cleanupentries($_POST["phone"]);
$f_address = cleanupentries($_POST["address"]);
$f_themessage = cleanupentries($_POST["themessage"]);
$from_ip = $_SERVER['REMOTE_ADDR'];
$from_browser = $_SERVER['HTTP_USER_AGENT'];

function cleanupentries($entry) {
	$entry = trim($entry);
	$entry = stripslashes($entry);
	$entry = htmlspecialchars($entry);

	return $entry;
}

$message = "This email was submitted on " . date('m-d-Y') . 
"\n\nFirst name: " . $f_name . 
"\n\nCompany name: " . f_company . 
"\n\nPhone: " . $f_phone . 
"\n\nAddress: " . $f_address . 
"\n\nE-Mail: " . $f_email . 
"\n\nDescription: " . $f_themessage . 
"\n\n\n\nTechnical Details:" . $from_ip . "\n" . $from_browser;

$send_subject .= " {$f_name}";

$headers = "From: " . $f_email . "\r\n" .
    "Reply-To: " . $f_email . "\r\n" .
    "X-Mailer: PHP/" . phpversion();

if (!$f_email) {
	echo "no email";
	exit;
}else if (!$f_name){
	echo "no name";
	exit;
}else{
	if (filter_var($f_email, FILTER_VALIDATE_EMAIL)) {
		mail($send_to, $send_subject, $message, $headers);
		echo "true";
	}else{
		echo "invalid email";
		exit;
	}
}

?>