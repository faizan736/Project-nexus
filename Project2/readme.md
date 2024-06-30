# Simple Restaurant Website Login and Signup Authentication

This project is a simple web application for restaurant management, incorporating user authentication with login and signup functionalities. Below are the details and instructions to understand and run the project.

## Project Structure

The project includes the following files:

1. **index.ejs**: Main page displaying a welcome message and a logout button.
2. **login.ejs**: Page for user login, containing a form for email and password input.
3. **signup.ejs**: Page for user signup, containing a form for name, email, and password input.
4. **server.js**: Node.js server file with configurations for user authentication, routing, and middleware.

## Usage

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/faizan736/project-nexus.git
   ```

2. Navigate to the project directory:

   ```bash
   cd project-nexus/Project2
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

### Running the Application

Run the following command to start the server:

```bash
npm start
```

The application will be accessible at `http://localhost:3000/`.

### Dependencies

- Express: Web application framework for Node.js.
- Bcrypt: Library for hashing passwords.
- Passport: Authentication middleware for Node.js.
- Express Flash: Middleware for flashing messages.
- Express Session: Middleware for session management.
- Method Override: Middleware for HTTP method override.

## Design

The design of the website is simple and user-friendly. It features a background image with a radial gradient, providing a pleasant and welcoming atmosphere. The login and signup pages are designed with a glass-like effect, enhancing the visual appeal.

### References

1. [Bootstrap Documentation](https://getbootstrap.com/docs/5.2/examples/cover/)
2. [Smashing Magazine](https://www.smashingmagazine.com)
3. [Desphixs](https://www.desphixs.com)
4. [MDN Web Docs](https://developer.mozilla.org/)

## Notes

- This project uses Bootstrap for styling and responsiveness.
- User data is stored in-memory for demonstration purposes. In a real-world scenario, a database would be used for data persistence.

Feel free to explore and customize the project based on your requirements. If you have any questions or need further assistance, refer to the provided references or contact the project creator.
