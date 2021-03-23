# Object-Relational Mapping (ORM): e-Commerce Back End
This repository contains the files that have been refactored to include a 'back end' for an e-commerce site, by the modification of given starter code. A working Express.js API has been configured using Sequelize to interact with a MySQL database.
A demonstration of the working application is provided via the 2 links below.


The original task specification is held within the repository under the title 'Task-README.md'.

## *Table of Contents*
- [Description](#description)
- [Installation](#installation)
- [Video](#video)
- [Usage](#usage)
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

## *Usage* ##
Seeding the database
![alt text](/Images/SeedingtheDatabase.png) 
Typical Model Structure - Category.js
![alt text](/Images/CategoryModel.png) 
Association example
![alt text](/Images/CategoryProductAssociations.png) 
Insomnia Core
![alt text](/Images/InsomniaCore.png) 

## *Credits*
- [License badges](https://shields.io/)
- [Node.js](https://nodejs.org/en/download/)
- [express npm](https://www.npmjs.com/package/express)
- [mySQL2](https://www.npmjs.com/package/mysql2)
- [Sequelize](https://www.npmjs.com/package/sequelize)
- Ask BCS 
- [Insomnia for Windows](https://insomnia.rest/)

    ![alt text](/Images/Insomnia.png) 

## *Video*
This are the 2 links demonstrating the functionality of this repository.

1. Part 1 https://drive.google.com/file/d/1RnyescGvrvgyEe-_MYrFk6KcSAGEkgfQ/view?usp=sharing
This link demonstrates the bulk of the program, seeding the database, running the server, going into Insomnia Core and running the routes for Category and also for Product.

2. Part 2 https://drive.google.com/file/d/1kaJS-EiUeU6ZnGRBqsv6ZMbtt-QKlzfl/view?usp=sharing  This link demonstrates the Tag-routes: Get all Tags, Get a particular Tag, create a new Tag (POST), update a new Tag (Put), Delete an existing Tag (DELETE).

## *Contributing and Questions*
For any suggestions or questions, please feel free to contact me via my Github page. (github.com/sallyxp)

## Testing
Insomnia Core is software used to test the routes between the program and  within a program.  The program runs via server.js listening as a localhost, and these links are typed into Insomnia.  

## *Authors*
Sally Rodgers

## *Contact Me*
- Github: **[sallyxp](github.com/sallyxp)
- LinkedIn: **[Sally Rodgers](www.linkedin.com/in/sallyhello1)  
- Email: **[sallyhello1@yahoo.com](mailto:sallyhello1@yahoo.com)

This project is MIT licensed. ![license](https://img.shields.io/static/v1?label=license&message=MIT&color=blueviolet) 
&copy; 2021 Sally Rodgers







