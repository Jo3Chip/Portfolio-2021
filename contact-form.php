<?php $name = $_POST['fullName'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent="From: $name \n Message: $message";
$recipient = "joe@joechipperfield.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader);
header('Location: contact-complete.html');
exit();
?>