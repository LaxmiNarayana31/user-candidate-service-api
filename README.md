### Overview

In this project, the aim is to create:
- A JWT (JSON Web Token) authentication system using Node.js.
- A microservice for a public API and connect it to the main service.

### Project Components

#### Main Service

This is the core service responsible for handling user authentication and authorization using JWT. Key features include:
- User authentication using JWT.
  - Generate JWT tokens upon successful login.
  - Validate JWT tokens for secure endpoints.
- Endpoints to add candidates to the Database and retrieve them.

#### Public API Microservice

This microservice provides a public API key that can be used to access main service routes without needing to log in with credentials. Features include:
- A public API that does not require authentication with email and password but is authorized with an API key.
- At least two endpoints in the public API.

#### Connection between Main Service and Public API Microservice

The main service should be able to communicate with the public API microservice to access its functionalities.

### Resources

1. **User Database**
   - Fields: `id`, `first_name`, `last_Name`, `email`, `password_hash`

2. **Candidate Database**
   - Fields: `id`, `first_name`, `last_Name`, `email`, `user_id`

2. **JWT Authentication Endpoints**
   - `POST /api/register`
   - `POST /api/login`
   - `POST /api/protected` (Should not be accessible without logging in)

3. **Other Endpoints**
   
   - `POST /api/candidate` (To add candidate to the database)
   - `GET /api/candidate` (Retrieve candidates for whom the current user is the owner)

4. **Public API Endpoints**
   - `POST /api/public/profile` (Retrieve the profile information of the user corresponding to the API key)
   - `GET /api/public/candidate` (Retrieve all candidates respective to the user whose API key is being used)

### Setup Instructions

#### Prerequisites

- Node.js (v14.x or higher)
- MySQL (v8.x or higher)
- npm (v6.x or higher)

#### Steps to Setup the Project

1. **Clone the Repository**

   ```sh
   git clone https://github.com/LaxmiNarayana31/user-candidate-service-api.git
   ```

2. **Install Dependencies**
    Navigate to the main service directory and install dependencies:
    ```sh
    cd main-service
    npm install
    ```
    Then navigate to the public API microservice directory and install dependencies:
    ```sh
    cd public-api
    npm install
    ```

3. **Configure Environment Variables**
    - Create a `.env` file in both main-service and public-api directories and add the following environment variables:

    For Main Service:
    ```sh
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=your_password
    DB_NAME=your_database_name
    JWT_SECRET=your_jwt_secret
    ```

    For Public API Microservice:
    ```sh
    API_KEY=your_api_key
    ```

4. **Setup the Database**
    - Execute these commands
    ```bash
    CREATE DATABASE myDatabase;
    USE myDatabase;
    mysql -u root -p myDatabase < path/to/dump.sql
    mysqldump -u root -p myDatabase > dump.sql
    ```

5. **Run the Services**
    - First, start the main service:
    ```sh
    cd main-service
    npm start
    ```
    - Then, in a new terminal, start the public API microservice:
    ```sh
    cd public-api
    npm start
    ```

6. **Test the Endpoints**
    - Register a new user: `POST /api/register`
    - Login: `POST /api/login`
    - Access protected route: `POST /api/protected` (with JWT token)
    - Add candidate: `POST /api/candidate`
    - Get candidates: `GET /api/candidate`
    - Access public profile: `POST /api/public/profile` (with API key)
    - Get public candidates: `GET /api/public/candidate` (with API key)


### Notes
Ensure all required dependencies are installed as specified.
If any issues arise during setup, check the environment variable configurations and database connections.
