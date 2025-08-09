## 🛠 Prerequisites

- [Node.js](https://nodejs.org/) (v16 or above recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [MongoDB](https://www.mongodb.com/) account (Atlas or local instance)
- [Git](https://git-scm.com/)



---

## 📥 Installation & Running Locally

```bash
# Clone the repository
git clone https://github.com/<your-username>/movie-bro.git
cd movie-bro

# Install backend dependencies
cd backend
npm install

# Create .env file in backend/ and add:
# PORT=5000
# MONGO_URI=your_mongodb_connection_string
# FRONTEND_URL=http://localhost:3000

# Start backend server
npm start

# Open a new terminal, navigate to frontend
cd ../frontend
npm install

# Start the React app
npm start
