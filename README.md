# Zerodha Clone

A full-stack stock trading platform inspired by Zerodha, built using React, Node.js, Express, and MongoDB.

## 🚀 Live Demo

* Frontend: https://zerodhaclone-frontend-ev7l.onrender.com
* Dashboard: https://zerodhaclone-dashboard-32e0.onrender.com

## 📂 GitHub Repository

https://github.com/Nadeemuddi/ZerodhaClone

## ✨ Features

* Responsive user interface
* Holdings and positions dashboard
* Buy order functionality
* REST API integration
* MongoDB database connectivity
* Real-time portfolio data display
* Modular component-based architecture

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router
* Axios
* Bootstrap
* Vite

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* CORS
* Dotenv

## 📁 Project Structure

```text
ZerodhaClone
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── dashboard/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── model/
│   ├── Schema/
│   ├── index.js
│   └── package.json
│
└── README.md
```

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/Nadeemuddi/ZerodhaClone.git
cd ZerodhaClone
```

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
MONGO_URL=your_mongodb_connection_string
```

Start the backend server:

```bash
npm start
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Dashboard Setup

```bash
cd dashboard
npm install
npm run dev
```

## 🔗 API Endpoints

### Get All Holdings

```http
GET /allHoldings
```

### Get All Positions

```http
GET /allPositions
```

### Create New Order

```http
POST /newOrder
```

## 📸 Screenshots

Add screenshots of:

* Home Page
* About Page
* Pricing Page
* Dashboard
* Buy Order Window

## 🎯 Learning Outcomes

Through this project, I learned:

* Building full-stack web applications
* REST API development
* MongoDB database integration
* React component architecture
* State management with React Hooks
* Deployment using Render
* Git and GitHub workflow

## 👨‍💻 Author

**Nadeem**

GitHub: https://github.com/Nadeemuddi

## 📄 License

This project is created for educational and portfolio purposes.
