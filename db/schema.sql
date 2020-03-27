DROP DATABASE IF EXISTS maji_db;

CREATE DATABASE maji_db;

USE maji_db;

CREATE TABLE companies
(
    company_name VARCHAR(200) NOT NULL,
    id INTEGER AUTO_INCREMENT,
    PRIMARY KEY(id),
    Irating DECIMAL(6,1),
    Grating DECIMAL(6,1),
    Drating DECIMAL(6,1),
    position VARCHAR(100),
    salary VARCHAR(200)
    
);


CREATE TABLE reviews
(
	userId VARCHAR(200) NOT NULL,
    company_name VARCHAR (200) NOT NULL,
    title VARCHAR (200) NOT NULL,
    user_rating DECIMAL(6,1),
    user_review VARCHAR(500),
	PRIMARY KEY(userId)
);

-- CREATE TABLE benefits
-- (
--     company_name VARCHAR(200) NOT NULL,
--     insurance VARCHAR(100) NOT NULL,
--     work_leave VARCHAR(50) NOT NULL,
--     health_well VARCHAR(50) NOT NULL,
--     retirement VARCHAR(25) NOT NULL,
--     PRIMARY KEY(company_name)
-- );

