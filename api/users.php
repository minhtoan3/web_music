<?php
require_once 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $email = $data['email'] ?? '';
    $password = $data['password'] ?? '';
    $name = $data['name'] ?? '';
    $gender = $data['gender'] ?? '';
    if (empty($email) || empty($password) || empty($name)) {
        echo json_encode(['error' => 'Missing required fields']);
        exit();
    }
    $password = password_hash($password, PASSWORD_DEFAULT);
    try {
        $stmt = $pdo->prepare("INSERT INTO users (email, password, name, gender) VALUES (?, ?, ?, ?)");
        $stmt->execute([$email, $password, $name, $gender]);
        echo json_encode(['success' => true, 'id' => $pdo->lastInsertId()]);
    } catch (PDOException $e) {
        echo json_encode(['error' => 'User registration failed: ' . $e->getMessage()]);
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $email = $_GET['email'] ?? '';
    if (empty($email)) {
        echo json_encode(['error' => 'Email is required']);
        exit();
    }
    $stmt = $pdo->prepare("SELECT id, email, name, gender FROM users WHERE email = ?");
    $stmt->execute([$email]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);
    echo json_encode($user ?: ['error' => 'User not found']);
}
?>