🛠️ 1. Extract Project in XAMPP (Linux)
sudo unzip project.zip -d /opt/lampp/htdocs/

If unzip is not installed:

sudo apt install unzip
🚀 2. Start XAMPP
sudo /opt/lampp/lampp start
🌐 3. Open Project in Browser
http://localhost/project/
🗄️ 4. Database Setup
Open phpMyAdmin:
http://localhost/phpmyadmin
Create Database:
CREATE DATABASE student_db;
USE student_db;
Create Table:
CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(50),
    age INT
);
