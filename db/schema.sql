DELETE TABLE IF EXISTS interview_ratingsDB;
CREATE TABLE interview_ratingsDB;

USE interview_ratingsDB;

company_id AUTO INCREMENT NOT NULL,
PRIMARY KEY (company_id),
Company_name VARCHAR(200) NOT NULL,
Company_industry VARCHAR(200),
Company_benefits VARCHAR(500),
Company_url VARCHAR(500),
Company_rating DECIMAL(10,1)