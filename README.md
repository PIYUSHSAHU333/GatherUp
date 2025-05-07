GatherUp 🎉
GatherUp is a modern event aggregation web application that allows users to explore, discover, and submit events across different categories. Whether you're looking for meetups, concerts, college fests, or hosting your own, GatherUp makes it easy to engage with the events happening around you.

✨ Features
  🔍 Browse and explore listed events
  
  📝 Submit your own events
  
  📁 Categories and filtering support
  
  🔒 Secure user authentication with JWT
  
  ⚡ Fast and responsive UI with React + Tailwind
  
  🌍 Hosted on MongoDB Atlas
  
  🌐 REST API built using Express and Node.js

🛠️ Tech Stack
  Frontend
  React 19
  
  React Router DOM
  
  Axios for API calls
  
  Tailwind CSS for styling
  
  Vite for lightning-fast development
  
  PostCSS
  
  Typed.js integration via react-typed

  Backend
  Node.js + Express
  
  MongoDB Atlas with Mongoose
  
  JWT for authentication
  
  bcrypt for password hashing
  
  CORS and dotenv for environment configuration

project structure: 
gatherup/
├── gatherup-frontend/    # React + Vite + Tailwind frontend
│   ├── public/
│   ├── src/
│   └── ...
├── gatherup-backend/     # Node.js + Express + MongoDB backend
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── models/
│   │   └── app.js
│   └── ...
└── README.md

🚀 Getting Started
Prerequisites
Make sure you have the following installed:

Node.js (v18+ recommended)

MongoDB Atlas account

Vite (optional for global dev usage)

🔧 Environment Variables

MONGODB_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret_key

🔨 Installation
1. Clone the repository
 git clone https://github.com/PIYUSHSAHU333/gatherup.git
 cd gatherup
2. Setup Backend
 cd gatherup-backend
 npm install
 npm start
3. Setup Frontend
  cd ../gatherup-frontend
  npm install
  npm run dev

🛡️ Security
All sensitive information (DB URI, JWT secret) is stored in environment variables.

Passwords are hashed using bcrypt.

Routes are protected using JWT middleware.

🧪 Future Enhancements
🗓️ Calendar view integration

🧭 Geo-location-based recommendations

📤 Image uploads for events

🛎️ Notification system for upcoming events

💬 Comments or reviews on events


👨‍💻 Author
  Piyush | Twitter(X): godsplay39 | telegram: +91 7007337311(Piyush Sahu)

📄 License
This project is licensed under the ISC License.  
