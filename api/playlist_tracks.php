<?php
require_once 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $playlist_id = $data['playlist_id'] ?? 0;
    $track_id = $data['track_id'] ?? 0;
    if ($playlist_id <= 0 || $track_id <= 0) {
        echo json_encode(['error' => 'Invalid playlist or track ID']);
        exit();
    }
    $stmt = $pdo->prepare("INSERT INTO playlist_tracks (playlist_id, track_id) VALUES (?, ?)");
    $stmt->execute([$playlist_id, $track_id]);
    echo json_encode(['success' => true]);
} elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $playlist_id = $_GET['playlist_id'] ?? 0;
    if ($playlist_id <= 0) {
        echo json_encode(['error' => 'Invalid playlist ID']);
        exit();
    }
    $stmt = $pdo->prepare("SELECT t.* FROM tracks t JOIN playlist_tracks pt ON t.id = pt.track_id WHERE pt.playlist_id = ?");
    $stmt->execute([$playlist_id]);
    $tracks = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($tracks);
}
?>