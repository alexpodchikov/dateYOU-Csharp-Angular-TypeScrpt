dateYOU – Help System
Prerequisites: 
•	ASP.NET Core – the latest version installed on your machine.
•	SDK – the latest version.
•	Node.js – the latest version.
•	Angular CLI - the latest version.

To run the project on your local machine, please follow these steps:

1.	Download the project from GitHub using the link: https://github.com/alexpodchikov/dateYOU OR extract files to the working directory from the ZIP file.
2.	Enter the terminal in the working directory - ClientSide.
3.	Type following commands:
“npm init -y”
“npm install”
4.	Inside ClientSide folder you need to run ‘ ng serve’ command and inside ServerSide folder ‘dotnet run’
5.	Open your browser and enter this URL: http://localhost:4200/
Note: 
•	For help you can open ‘package.json’ file which is in project folder.
•	Project folder ServerSide has my database file and migrations files. You can use them to get number of users for checking the site capabilities. For this you need to run ‘dotnet ef database update’ command inside the ServerSide folder.

