# Blogging Application Development

This project involves the development of a blogging application with a focus on backend development. The goal is to create a RESTful API that allows authors to create and manage their blogs, users to comment on blogs, and implement additional optional features such as co-authoring, likes, and views count.

## Modelling

1. **Author:**

   - Attributes: Full name, email

2. **Blog:**

   - Attributes: Title, content, author
   - Relationships: Many blogs can be created by an author
   - Optional features: Co-authoring, likes count, views count

3. **Comment:**
   - Attributes: Blog, user info
   - Relationships: A blog can have many comments

## Project Requirements

1. **Backend Technology:** NodeJS with Express server will be used for this project. The Express framework will help in creating the RESTful API endpoints for the application.

2. **Database:** You can choose one of the following databases for storing the application data:

   - Google Firestore
   - Google Firebase
   - Remote MongoDB

3. **Cloud Hosting:** The project must be hosted on a cloud platform of your choice. If hosting the Express server is not possible, ensure that the chosen database is hosted.

## Optional Tasks

1. **Co-authoring:** Implement the ability for multiple authors to collaborate on a single blog. This feature allows multiple authors to contribute to a blog post.

2. **Likes Count:** Implement the functionality to track and store the number of likes received by each blog post. This feature enables users to express their appreciation for a particular blog.

3. **Views Count:** Implement the functionality to track and store the number of views for each blog post. This feature provides insights into the popularity and engagement of a blog.

By developing this blogging application, you will create a robust backend system that allows authors to create, manage, and collaborate on blogs, while users can interact with the blogs through comments, likes, and views. The RESTful API will provide endpoints for performing CRUD (Create, Read, Update, Delete) operations on the various models, ensuring a seamless experience for both authors and users.

## Installation Instructions

1. Make sure you have Node.js and npm installed on your system.
2. Run the following command to install the required Node.js modules:

   ```shell
   npm install
   ```

3. Rename the `sample.env` file to `.env` and add your own MongoDB URI to the file.

## Usage Guide

The application provides the following API routes:

- `/api/author/`: Handles CRUD operations for authors.
- `/api/blog/`: Handles CRUD operations for blogs.
- `/api/comment/`: Handles CRUD operations for comments.

Each route supports different HTTP methods for different operations. Please refer to the code comments to understand what each method does.

Feel free to explore the endpoints and interact with the application by making HTTP requests based on your requirements.

Please let me know if you need any further modifications or additions to the README file!
