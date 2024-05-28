# Markdown Blog Application
The Markdown Blog application is a web-based platform allowing users to create, edit, and view blog articles written in Markdown. It leverages a combination of server-side and client-side technologies to manage and display content effectively.

## Technologies Used
1. Node.js: Runtime environment for server-side JavaScript execution.
2. Express: Web application framework for handling HTTP requests and responses.
3. Mongoose: Object Data Modeling library for MongoDB interactions.
4. MongoDB: NoSQL database for storing blog articles.
5. EJS (Embedded JavaScript): Templating engine for generating HTML markup.
6. Marked: Library for parsing Markdown and converting it to HTML.
7. DOMPurify: Library for sanitizing HTML to prevent XSS attacks.
8. Slugify: Library for generating URL-friendly slugs.
9. Method-Override: Middleware for supporting HTTP verbs like PUT or DELETE.
10. Bootstrap: Front-end framework for building responsive websites.

## Features
### Create Articles
Users can create new articles using a form.
The form includes fields for title, description, and Markdown content.
### Edit Articles
Users can edit existing articles.
The edit form is pre-populated with the current article data.
### View Articles
Users can view articles in a detailed view, displaying title, creation date, and Markdown content rendered as HTML.
### Delete Articles
Users can delete articles from the list or detailed view.
## Markdown to HTML Conversion
Articles are stored in Markdown format and converted to HTML for rendering.
Sanitization is applied to HTML content to prevent XSS attacks.
## Slug Generation
Article titles are converted into URL-friendly slugs for better SEO.
server.js: Sets up the Express server, connects to MongoDB, and defines routes.
article.js: Defines the Mongoose schema for articles.
articles.js: Defines Express routes for handling articles.
new.ejs, edit.ejs, show.ejs: EJS templates for new article form, edit article form, and article display, respectively.

## Important commands:
1. npm init -y (download all dependencies)
2. To server @ localhost:5000

# How It Works

### Creating an Article:
User fills out the form at /articles/new.
Form submission sends a POST request to /articles.
Server creates a new article, converts Markdown to HTML, and stores it in the database.
User is redirected to the newly created article's page.

### Editing an Article:
User navigates to /articles/edit/:id to edit an article.
Form pre-filled with the article's data.
Form submission sends a PUT request to /articles/:id.
Server updates the article in the database and redirects to the updated article's page.

### Viewing an Article:
User navigates to /articles/:slug to view an article.
Server fetches the article from the database and renders it with the article's data.

### Deleting an Article:
User clicks the delete button, sending a DELETE request to /articles/:id.
Server deletes the article from the database and redirects to the home page.
This setup provides a robust foundation for a Markdown-based blogging platform with full CRUD functionality.

