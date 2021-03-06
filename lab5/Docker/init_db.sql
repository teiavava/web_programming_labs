CREATE TABLE IF NOT EXISTS authors (
    id serial PRIMARY KEY,
    first_name varchar NOT NULL,
    last_name varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS publishers (
    id serial PRIMARY KEY,
    name varchar NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS books (
    id serial PRIMARY KEY,
    name varchar NOT NULL,
    author_id integer REFERENCES authors(id)
);

CREATE TABLE IF NOT EXISTS publishers_books (
    book_id integer REFERENCES books(id),
    publisher_id integer REFERENCES publishers(id),
    price integer NOT NULL,
    PRIMARY KEY (book_id, publisher_id) 
);

CREATE TABLE IF NOT EXISTS roles (
    id serial PRIMARY KEY,
    value varchar NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS users (
    id serial PRIMARY KEY,
    username varchar NOT NULL UNIQUE,
    password varchar NOT NULL,
    role_id integer REFERENCES roles(id)
);

INSERT INTO roles (value) VALUES ('ADMIN');
INSERT INTO roles (value) VALUES ('MANAGER');
INSERT INTO roles (value) VALUES ('USER');

SELECT * from roles;

INSERT INTO users (username, password, role_id) VALUES ('admin', '$2y$10$BLMZFAnCPXX0cVRmdPP3Meu3NR/xWucAyQ4aAW2z57RlLdLPvH0Hi', 1);
INSERT INTO users (username, password, role_id) VALUES ('manager', '$2y$10$BLMZFAnCPXX0cVRmdPP3Meu3NR/xWucAyQ4aAW2z57RlLdLPvH0Hi', 2);
