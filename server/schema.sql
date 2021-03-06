CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  uid INTEGER,
  rid INTEGER,
  message TEXT,
  createdAt TIMESTAMP
);

CREATE TABLE users (
  /* Describe your table here.*/
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(20)
);

CREATE TABLE rooms (
  /* Describe your table here.*/
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  roomName VARCHAR(40)
);

INSERT INTO messages (
  uid,
  rid,
  message
)
VALUES (
  1,1,"first dummy test message, dawg!"
);

INSERT INTO users (
  username
)
VALUES (
  "Regular Person"
);

INSERT INTO rooms (
  roomName
)
VALUES (
  "unRegular Room"
);


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

