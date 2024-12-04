<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the feedback message
    $feedback = trim($_POST["feedback"]);

    // Your email address
    $to = "your-email@example.com";
    $subject = "New Website Feedback";

    // Build the email message
    $message = "You have received new feedback:\n\n" . $feedback;

    // Send the email
    $headers = "From: webmaster@yourwebsite.com";
    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you for your feedback!";
    } else {
        echo "Sorry, something went wrong. Please try again later.";
    }
} else {
    echo "Invalid request.";
}
?>
