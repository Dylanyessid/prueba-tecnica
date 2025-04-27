CREATE DATABASE library_management;
USE library_management;

CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255),
  email VARCHAR(255),
  phone_number VARCHAR(50),
  created_at TIMESTAMP,
  updated_at TIMESTAMP,
  deleted_at TIMESTAMP NULL
);

CREATE TABLE authors (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255),
  created_at TIMESTAMP,
  updated_at TIMESTAMP,
  deleted_at TIMESTAMP NULL
);

CREATE TABLE books (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255),
  published_date DATE,
  created_at TIMESTAMP,
  updated_at TIMESTAMP,
  deleted_at TIMESTAMP NULL
);

CREATE TABLE book_authors (
  id INT PRIMARY KEY AUTO_INCREMENT,
  book_id INT,
  author_id INT,
  created_at TIMESTAMP,
  updated_at TIMESTAMP,
  FOREIGN KEY (book_id) REFERENCES books(id),
  FOREIGN KEY (author_id) REFERENCES authors(id),
  deleted_at TIMESTAMP NULL
);

CREATE TABLE book_copies (
  id INT PRIMARY KEY AUTO_INCREMENT,
  book_id INT,
  is_available BOOLEAN,
  created_at TIMESTAMP,
  updated_at TIMESTAMP,
  FOREIGN KEY (book_id) REFERENCES books(id),
  deleted_at TIMESTAMP NULL
);


CREATE TABLE loans (
  id INT PRIMARY KEY AUTO_INCREMENT,
  copy_id INT,
  user_id INT,
  loan_date DATE,
  return_date DATE,
  is_returned BOOLEAN,
  created_at TIMESTAMP,
  updated_at TIMESTAMP,
  deleted_at TIMESTAMP NULL,
  FOREIGN KEY (copy_id) REFERENCES book_copies(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);


INSERT INTO authors (id, name, created_at, updated_at, deleted_at) VALUES
(1, 'Gabriel García Márquez', NOW(), NOW(), null),
(2, 'J.K. Rowling', NOW(), NOW(), NULL),
(3, 'George Orwell', NOW(), NOW(), null),
(4, 'Haruki Murakami', NOW(), NOW(), null),
(5, 'F. Scott Fitzgerald', NOW(), NOW(), null);
