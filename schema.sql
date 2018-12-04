DROP DATABASE IF EXISTS books;

CREATE DATABASE books;

USE books;

CREATE TABLE book (
  id int NOT NULL AUTO_INCREMENT,
  title TEXT,
  pageNum int,
  PRIMARY KEY (ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
