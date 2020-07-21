DROP DATABASE IF EXISTS noteTaker_db;
CREATE DATABASE noteTaker_db;

-- tells mysql that we are going to start interacting with noteTaker_db
USE noteTaker_db;

CREATE TABLE note (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(55) NOT NULL,
    text VARCHAR(2500) NOT NULL
);