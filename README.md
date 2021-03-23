# ecommerce
This repository contains the files that have been refactored to include a 'back end' for an e-commerce site by the modification of given starter code. A working Express.js API has been configured using Sequelize to interact with a MySQL database.
A demonstration of the working application is provided via a link below.

The original task specification is held within the repository under the title 'Task-README.md'.

## *Table of Contents*
- [Description](#description)
- [Installation](#installation)
- [Video](#video)
[Usage](#usage)
- [Credits](#Credits) 
- [Contributing](#contributing)
- [Authors](#authors)
- [Contact Me](#contact-me)

## Description
MySQL2 and Sequelize packages were used to connect Express.js API to a MySQL database which was created using the schema held in the schema.sql file.  Environmental variables were used to store sensitive data like MySQL username, password and database name.  

The database spec outlined 4 models to build and their respective relationships.  Then association methods were added onto these models. API routes were completed where required and then the database was seeded using supplied files, by running seeds\index.js in the terminal.  Once completed, the routes were tested using Insomnia Core.

## *Installation*
The user must clone all files from this repository.  It is important that the file locations remain the same in relation to each other.

To run the program, the database must be running.  I have written the program using MySQL Workbench so I have included this below.  

## To start MySQL Workbench (to run the database) ##
Open the XAMPP Control Panel, if user uses Windows, to 'Start' MySQL to connect in the Node terminal

![alt text](/Images/2XAMPP.png) 

To run, node.js must be installed. Open the command line (within the same directory as the Develop directory). Right clicking on the Develop directory, you can click on 'Open in Integrated Terminal'.

'npm install' will download all the required dependencies:
Express, mySQL2, Sequelize, dotenv.

## *Video*
This is a link demonstrating the functionality of this repository.

## *Contributing and Questions*
For any suggestions or questions, please feel free to contact me via my Github page. (github.com/sallyxp)

## Testing
Opening each selection and running and checking the output is as expected

## *Authors*
Sally Rodgers

## *Contact Me*
- Github: **[sallyxp](github.com/sallyxp)
- LinkedIn: **[Sally Rodgers](www.linkedin.com/in/sallyhello1)  
- Email: **[sallyhello1@yahoo.com](mailto:sallyhello1@yahoo.com)

This project is MIT licensed. ![license](https://img.shields.io/static/v1?label=lic







