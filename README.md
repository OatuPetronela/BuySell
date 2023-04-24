## BuySell

![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript&logoColor=white)
![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-4.2.1-purple?logo=redux&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.2.4-blue?logo=tailwind-css&logoColor=white)
![Express](https://img.shields.io/badge/Express-4.18.2-black?logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-5.3.0-green?logo=mongodb&logoColor=white)

### Overview BuySell

BuySell is a web application that I developed using React for the frontend and Node.js, MongoDB, and Express for the backend. The application allows users to browse various categories of products and create new listings for items they want to sell.

On the frontend, I created the main page using Tailwind and included a navbar, footer, and content section that displays categories and their subcategories. To populate this section, I made requests to the backend to retrieve categories' names, images, and links. Additionally, I implemented an authentication using JSON-server-auth but plan to migrate to MongoDB in the near future.

To handle errors on the frontend, I used Redux to create actions that dispatch success or fail actions depending on the result of the backend requests. This approach allowed me to display helpful error messages to users if something goes wrong.

On the backend, I created endpoints to retrieve the categories and allow users to post new product listings. To ensure that the application performs efficiently and securely, I implemented best practices such as input validation, password hashing, and error handling.

Overall, BuySell is a continuously evolving project that I am committed to improving and developing further.
