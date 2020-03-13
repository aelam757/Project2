DELETE DATABASE IF EXISTS maji_db;

CREATE DATABASE maji_db;

USE maji_db;

CREATE TABLE companies
(
company_id AUTO INCREMENT NOT NULL,
Company_name VARCHAR(200) NOT NULL,
Company_industry VARCHAR(200),
Company_benefits VARCHAR(500),
Company_url VARCHAR(500),
Company_rating DECIMAL(10,1),
Company_position VARCHAR(500),
Company_salary INT,
PRIMARY KEY (company_id)
);

CREATE TABLE clients
(
	user_id INT NOT NULL AUTO INCREMENT,
    client_name VARCHAR(200) NOT NULL,
    user_rating DECIMAL(10,1),
    salary_rating DECIMAL(10,1),
    benefits_rating DECIMAL(10,1),
    interview_rating DECIMAL(10,1),
	PRIMARY KEY(user_id)
);