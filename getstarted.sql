CREATE DATABASE locallibrary;

\c locallibrary

CREATE TABLE books(book_id SERIAL PRIMARY KEY, description VARCHAR(255));