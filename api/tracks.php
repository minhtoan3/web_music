<?php
require 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    try {
        $stmt = $pdo->query('SELECT * FROM tracks');
        $tracks = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($tracks);
    } catch (PDOException $e) {
        echo json_encode(['error' => 'Query failed: ' . $e->getMessage()]);
    }
}
?>