<?php
require 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    try {
        $user_id = isset($_GET['user_id']) ? (int)$_GET['user_id'] : 0;
        $stmt = $pdo->prepare('SELECT p.*, GROUP_CONCAT(pt.track_id) as track_ids 
                              FROM playlists p 
                              LEFT JOIN playlist_tracks pt ON p.id = pt.playlist_id 
                              WHERE p.user_id = ? 
                              GROUP BY p.id');
        $stmt->execute([$user_id]);
        $playlists = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($playlists);
    } catch (PDOException $e) {
        echo json_encode(['error' => 'Query failed: ' . $e->getMessage()]);
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $user_id = $data['user_id'] ?? 0;
    $name = $data['name'] ?? '';
    $description = $data['description'] ?? '';
    try {
        $stmt = $pdo->prepare('INSERT INTO playlists (user_id, name, description) VALUES (?, ?, ?)');
        $stmt->execute([$user_id, $name, $description]);
        echo json_encode(['id' => $pdo->lastInsertId(), 'name' => $name, 'description' => $description]);
    } catch (PDOException $e) {
        echo json_encode(['error' => 'Insert failed: ' . $e->getMessage()]);
    }
}
?>