DROP DATABASE IF EXISTS sign_db;
CREATE DATABASE sign_db;
USE sign_db;

CREATE TABLE signs
(
	id int NOT NULL AUTO_INCREMENT,
	astro_sign varchar(255) NOT NULL,
	name varchar(255) NOT NULL,
	PRIMARY KEY (id)
);