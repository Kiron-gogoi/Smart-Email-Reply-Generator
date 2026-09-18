# Smart Email Reply Generator

An AI-powered web application that generates email replies based on the email content and selected tone. The application uses a React frontend and a Spring Boot backend integrated with the Google Gemini API.

## Features

* Generate AI-powered email replies
* Choose different response tones such as Professional, Casual, Friendly, and Negative
* REST API built with Spring Boot
* React-based user interface
* Google Gemini API integration
* Responsive UI using Material UI
* Separate frontend and backend architecture

## Tech Stack

### Frontend

* React
* Vite
* Material UI
* Axios
* JavaScript

### Backend

* Java
* Spring Boot
* Spring WebFlux / WebClient
* REST API
* Maven

### AI & Tools

* Google Gemini API
* Git & GitHub
* Docker
* AWS

## Project Structure

```text
Smart-Email-Reply-Generator/
│
├── src/
│   └── main/
│       ├── java/
│       │   └── com/smart/email/assistant/
│       │       ├── controller/
│       │       ├── entity/
│       │       ├── service/
│       │       └── Application.java
│       │
│       └── resources/
│           └── application.properties
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── pom.xml
└── README.md
```

## How It Works

1. The user enters an email message in the React application.
2. The user selects the desired reply tone.
3. The frontend sends the request to the Spring Boot REST API.
4. The backend creates a prompt using the email content and selected tone.
5. The backend sends the prompt to the Google Gemini API.
6. The generated reply is returned to the frontend and displayed to the user.

## API Endpoint

### Generate Email Reply

```http
POST /api/email/generate
```

Example request:

```json
{
  "emailContent": "Thank you for contacting me regarding the interview.",
  "tone": "Professional"
}
```

The API returns the AI-generated email reply.

## Environment Variables

The Gemini API key is **not stored in the source code or GitHub repository**.

The backend reads the API key from the following environment variable:

```text
GEMINI_API_KEY
```

Create the environment variable before running the backend.

## Running the Project

### Backend

From the project root:

```bash
./mvnw spring-boot:run
```

On Windows:

```cmd
mvnw.cmd spring-boot:run
```

The backend runs by default on:

```text
http://localhost:8080
```

### Frontend

Open another terminal and go to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend will normally be available at:

```text
http://localhost:5173
```

## Security

API credentials are kept outside the source code using environment variables. Sensitive credentials should never be committed to GitHub.

## Future Improvements

* User authentication
* Email history
* Multiple AI model support
* Custom prompt templates
* Deployment with a production database
* Improved error handling and validation

## Author

**Kiron Gogoi**

MCA | Software Developer

Assam, India
