# Todo Application

A simple and responsive Todo application built with React for the frontend and Node.js with Express for the backend. This project serves as a practical example of full-stack development, showcasing CRUD operations and API integration.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create, read, update, and delete todos.
- User-friendly interface with loading indicators and success/error messages.
- Responsive design for seamless experience across devices.

## Technologies Used

- **Frontend:**
  - React
  - Axios
  - CSS

- **Backend:**
  - Node.js
  - Express
  - MongoDB

## Installation

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- npm (Node Package Manager)
- MongoDB (for the backend)

### Clone the Repository
bash
git clone https://github.com/yourusername/todo-app.git
cd todo-app

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd frontend/todo-app
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the frontend application:

   ```bash
   npm start
   ```

### Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd backend/todo-app
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the backend server:

   ```bash
   npm start
   ```

## Usage

Once both the frontend and backend are running, you can access the Todo application in your web browser at `http://localhost:3000`. You can create, view, update, and delete todos from the interface.

## API Endpoints

- **GET** `/api/get-todo` - Retrieve all todos.
- **POST** `/api/create` - Create a new todo.
- **DELETE** `/api/delete/:id` - Delete a todo by ID.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to open an issue or submit a pull request.
