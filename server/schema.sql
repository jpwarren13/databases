-- DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE users ( 
  ID int NOT NULL AUTO_INCREMENT,
  name varchar(255),
  PRIMARY KEY(ID)
);

CREATE TABLE rooms (
  ID int NOT NULL AUTO_INCREMENT,
  room varchar(255),
  PRIMARY KEY(ID)
);

CREATE TABLE messages (
  ID int NOT NULL AUTO_INCREMENT, 
  message varchar(255), 
  userID int, 
  roomID int,  
  PRIMARY KEY(ID),
  FOREIGN KEY (userID) REFERENCES users(ID), 
  FOREIGN KEY (roomID) REFERENCES rooms(ID)
);
/* mysql -u root < server/schema.sql */