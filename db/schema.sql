DROP DATABASE IF EXISTS maji_db;

CREATE DATABASE maji_db;

USE maji_db;

CREATE TABLE companies
(
    company_name VARCHAR(200) NOT NULL,
    Irating DECIMAL(6,1),
    Grating DECIMAL(6,1),
    Drating DECIMAL(6,1),
    PRIMARY KEY (company_name)
);

CREATE TABLE ratings
(
	userId VARCHAR(200) NOT NULL,
    -- client_name VARCHAR(200) NOT NULL,
    user_rating DECIMAL(6,1),
    salary_rating DECIMAL(6,1),
    benefits_rating DECIMAL(6,1),
	PRIMARY KEY(userId)
);

CREATE TABLE benefits
(
    company_name VARCHAR(200) NOT NULL,
    insurance VARCHAR(100) NOT NULL,
    leave VARCHAR(50) NOT NULL,
    health_well VARCHAR(50) NOT NULL,
    retirement VARCHAR(25) NOT NULL,
    PRIMARY KEY(company_name)
);

CREATE TABLE positiions
(
    company_name VARCHAR(200) NOT NULL,
    position_title VARCHAR(20),
    salary INT,
    PRIMARY KEY(company_ID),
    
);

