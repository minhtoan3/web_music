<?php
require_once 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $user_id = $data['user_id'] ?? 0;
    $track_id = $data['track_id'] ?? 0;
    if ($user_id <= 0 || $track_id <= 0) {
        echo json_encode(['error' => 'Invalid user or track ID']);
        exit();
    }
    $stmt = $pdo->prepare("INSERT INTO favorites (user_id, track_id) VALUES (?, ?)");
    $stmt->execute([$user_id, $track_id]);
    echo json_encode(['success' => true]);
} elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $user_id = $_GET['user_id'] ?? 0;
    if ($user_id <= 0) {
        echo json_encode(['error' => 'Invalid user ID']);
        exit();
    }
    $stmt = $pdo->prepare("SELECT t.* FROM tracks t JOIN favorites f ON t.id = f.track_id WHERE f.user_id = ?");
    $stmt->execute([$user_id]);
    $favorites = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($favorites);
} elseif ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $data = json_decode(file_get_contents('php://input'), true);
    $user_id = $data['user_id'] ?? 0;
    $track_id = $data['track_id'] ?? 0;
    if ($user_id <= 0 || $track_id <= 0) {
        echo json_encode(['error' => 'Invalid user or track ID']);
        exit();
    }
    $stmt = $pdo->prepare("DELETE FROM favorites WHERE user_id = ? AND track_id = ?");
    $stmt->execute([$user_id, $track_id]);
    echo json_encode(['success' => true]);
}
?>