<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Retrieve form data
  $name = $_POST["name"];
  $subject = $_POST["subject"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  // Validate input (you can add more validation as needed)
  if (empty($name) || empty($email) || empty($message)) {
    // Handle empty fields
    echo "Please fill in all required fields.";
    exit;
  }

  // Set up email headers
  $to = "your-email@example.com"; // Replace with your email address
  $headers = "From: $name <$email>\r\n";
  $headers .= "Reply-To: $email\r\n";
  $headers .= "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

  // Construct email content
  $emailContent = "Name: $name\n";
  $emailContent .= "Subject: $subject\n";
  $emailContent .= "Email: $email\n\n";
  $emailContent .= "Message:\n$message";

  // Send the email
  if (mail($to, $subject, $emailContent, $headers)) {
    // Email sent successfully
    echo "Thank you for your message. We'll be in touch soon!";
  } else {
    // Failed to send email
    echo "Oops! Something went wrong. Please try again later.";
  }
}
?>
