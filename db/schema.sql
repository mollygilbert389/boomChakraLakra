DROP DATABASE IF EXISTS sign_db;
CREATE DATABASE sign_db;
USE sign_db;

CREATE TABLE signs
(
	id int NOT NULL AUTO_INCREMENT,
	astro_sign varchar(255) NOT NULL,
	userName varchar(255) NOT NULL,
	dayOfBirth INT NULL,
	monthOfBirth INT NULL,
	yearOfBirth INT NULL,
	PRIMARY KEY (id)
);

