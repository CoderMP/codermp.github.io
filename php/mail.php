<?php
// Check empty fields
if(empty($_POST['name']) || 
   empty($_POST['email']) || 
   empty($_POST['subject']) || 
   empty($_POST['message']) ||
   !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL))
   {
       echo "No arguments provided";
       return false;
   }

//Email properties
$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$subject = strip_tags(htmlspecialchars($_POST['subject']));
$message = strip_tags(htmlspecialchars($_POST['message']));

//Create the email & send
$to = 'mphilips15@gmail.com';
$email_body = 'New message from: $name\n\nMessage:\n$message';
$header = "From: $email_address";
mail($to, $subject, $email_body, $header);
return true;
?>