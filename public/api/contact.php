<?php
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

$body = json_decode(file_get_contents('php://input'), true);
if (!is_array($body)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Invalid request']);
    exit;
}

// Honeypot — silently succeed for bots
if (!empty($body['website'])) {
    echo json_encode(['ok' => true]);
    exit;
}

$name        = strip_tags(trim($body['name']        ?? ''));
$email       = filter_var(trim($body['email']       ?? ''), FILTER_SANITIZE_EMAIL);
$projectType = strip_tags(trim($body['projectType'] ?? ''));
$subject     = strip_tags(trim($body['subject']     ?? ''));
$timeline    = strip_tags(trim($body['timeline']    ?? ''));
$message     = strip_tags(trim($body['message']     ?? ''));

// Server-side validation
$errors = [];
if (mb_strlen($name) < 2)                             $errors[] = 'name';
if (!filter_var($email, FILTER_VALIDATE_EMAIL))        $errors[] = 'email';
if (mb_strlen($projectType) < 2)                      $errors[] = 'projectType';
if (mb_strlen($subject) < 3)                          $errors[] = 'subject';
if (mb_strlen($message) < 20)                         $errors[] = 'message';

if (!empty($errors)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Validation failed', 'fields' => $errors]);
    exit;
}

$to          = 'info@webhostpro.gr';
$mailSubject = '=?UTF-8?B?' . base64_encode('Αίτημα συνεργασίας: ' . $subject) . '?=';

$body_text  = "Νέο αίτημα συνεργασίας μέσω webhostpro.gr\n";
$body_text .= str_repeat('─', 44) . "\n\n";
$body_text .= "Όνομα:          {$name}\n";
$body_text .= "Email:          {$email}\n";
$body_text .= "Τύπος project:  {$projectType}\n";
$body_text .= "Θέμα:           {$subject}\n";
$body_text .= "Timeline:       {$timeline}\n\n";
$body_text .= "Μήνυμα:\n{$message}\n";

$headers  = 'From: noreply@webhostpro.gr' . "\r\n";
$headers .= 'Reply-To: ' . $email . "\r\n";
$headers .= 'Content-Type: text/plain; charset=UTF-8' . "\r\n";
$headers .= 'X-Mailer: PHP/' . PHP_VERSION;

$sent = mail($to, $mailSubject, $body_text, $headers);

if ($sent) {
    echo json_encode(['ok' => true]);
} else {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Αποτυχία αποστολής. Δοκιμάστε ξανά αργότερα.']);
}
