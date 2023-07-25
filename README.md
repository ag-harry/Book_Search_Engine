## Book Search Engine

The Book Search Engine is a MERN (MongoDB, Express.js, React.js, Node.js) application that allows users to search for books, save their favorites, and manage their collection. The application is built with a GraphQL API using Apollo Server and deployed on Heroku with a MongoDB database via MongoDB Atlas.

Book Search Engine

## Features
Users can search for books by typing a search term into the search box. The application retrieves book data using Google Books API and presents the user with a list of books matching the search term, displaying each book's title, author, description, image, and a link to that book on the Google Books site.
Users can save books to their account by clicking "Save This Book!" under each search result.
Users can view their saved books on a separate page, displaying all the books saved to their account with an option to remove a book from the account.
User authentication is implemented. Users can sign up and log in to their account, and the application changes the menu options dynamically based on whether the user is logged in or not.


User Story

AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase
Acceptance Criteria

	GIVEN a book search engine
	WHEN I load the search engine
	THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
	WHEN I click on the Search for Books menu option
	THEN I am presented with an input field to search for books and a submit button
	WHEN I am not logged in and enter a search term in the input field and click the submit button
	THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
	WHEN I click on the Login/Signup menu option
	THEN a modal appears on the screen with a toggle between the option to log in or sign up
	WHEN the toggle is set to Signup
	THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
	WHEN the toggle is set to Login
	THEN I am presented with two inputs for an email address and a password and login button
	WHEN I enter a valid email address and create a password and click on the signup button
	THEN my user account is created and I am logged in to the site
	WHEN I enter my account’s email address and password and click on the login button
	THEN I the modal closes and I am logged in to the site
	WHEN I am logged in to the site
	THEN the menu options change to Search for Books, an option to see my saved books, and Logout
	WHEN I am logged in and enter a search term in the input field and click the submit button
	THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
	WHEN I click on the Save button on a book
	THEN that book’s information is saved to my account
	WHEN I click on the option to see my saved books
	THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
	WHEN I click on the Remove button on a book
	THEN that book is deleted from my saved books list
	WHEN I click on the Logout button
	THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button  
## Installation
To install the necessary dependencies, run the following command in your terminal:

bash

npm install
Usage
To start the application, run the following command in your terminal:

bash

npm start
Contributing
Contributions are welcome. If you are interested in contributing to this project, please fork the project, make your changes, and open a pull request. For major changes, please open an issue first to discuss what you would like to change.

Contact
If you have any questions about the repo, open an issue or contact me directly at ag-harry.

Live Application
You can view the deployed application on Heroku.