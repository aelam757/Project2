DELETE DATABASE IF EXISTS maji_db;

CREATE DATABASE maji_db;

USE maji_db;

CREATE TABLE companies
(
company_name VARCHAR(200) NOT NULL,
benefits VARCHAR(500),
rating DECIMAL(10,1),
position VARCHAR(20),
salary INT,
PRIMARY KEY (company_id)
);

CREATE TABLE ratings
(
	userId_rating INT NOT NULL AUTO INCREMENT,
    client_name VARCHAR(200) NOT NULL,
    user_rating DECIMAL(6,1),
    salary_rating DECIMAL(6,1),
    benefits_rating DECIMAL(6,1),
    interview_rating DECIMAL(6,1),
	PRIMARY KEY(userId_rating)
);

