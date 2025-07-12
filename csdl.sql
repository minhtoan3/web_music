CREATE DATABASE music_app;
USE music_app;

CREATE TABLE tracks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    artist VARCHAR(255) NOT NULL,
    src VARCHAR(255) NOT NULL,
    cover VARCHAR(255),
    duration INT NOT NULL,
    genre VARCHAR(100),
    album VARCHAR(255),
    lyrics TEXT
);

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(100) NOT NULL,
    gender ENUM('Nam', 'Nữ') DEFAULT 'Nam'
);

CREATE TABLE playlists (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    cover VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE playlist_tracks (
    playlist_id INT,
    track_id INT,
    FOREIGN KEY (playlist_id) REFERENCES playlists(id),
    FOREIGN KEY (track_id) REFERENCES tracks(id),
    PRIMARY KEY (playlist_id, track_id)
);

CREATE TABLE favorites (
    user_id INT,
    track_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (track_id) REFERENCES tracks(id),
    PRIMARY KEY (user_id, track_id)
);
