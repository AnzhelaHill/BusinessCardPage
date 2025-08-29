<?php

$name = $_POST["name"];
$from = $_POST["email"];
$subject = "Wiadomość z formularza na stronie";
$to = "gilevichanz@gmail.com";
$message = $_POST["msg"];

$text = "Imię: " . $name . "\r\n" . "Email: " . $from . "\r\n" . "Treść: " . $message;

$headers = "From: " . $from . "\r\n";
$headers .= "Reply-To: " . $from . "\r\n";

$mail_status = mail($to, $subject, $text, $headers);

if($mail_status) {
    header('Location: index.html?mail_status=sent');
} else {
    header('Location: index.html?mail_status=error');
}