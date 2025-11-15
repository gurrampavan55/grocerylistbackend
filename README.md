# 🛒 Grocery List MERN App

A full-stack web application built with MERN (MongoDB, Express, React, Node.js) for managing your grocery shopping list.

## 📋 Features

- ✅ Add grocery items
- ✅ Mark items as complete/incomplete
- ✅ Delete items
- ✅ Real-time updates with MongoDB
- ✅ Responsive design
- ✅ Error handling
- ✅ Loading states

## 🚀 Tech Stack

### Frontend
- **React 19** - UI library
- **Vite** - Build tool
- **CSS3** - Styling

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **MongoDB Atlas** - Database
- **Mongoose** - ODM

## 📁 Project Structure

```
mern-project/
├── Backend/                 # Node.js API Server
│   ├── config/
│   │   └── db.js           # MongoDB connection
│   ├── models/
│   │   └── GroceryItem.js  # Data schema
│   ├── routes/
│   │   └── groceryRoutes.js # API endpoints
│   ├── server.js           # Main server file
│   ├── package.json
│   ├── .env                # Environment variables
│   └── README.md
│
└── Grocery List/           # React Frontend
    ├── src/
    │   ├── App.jsx         # Main component
    │   ├── App.css         # Styles
    │   ├── index.css
    │   └── main.jsx
    ├── package.json
    ├── vite.config.js
    ├── .env                # Environment variables
    └── README.md
```

## 🛠️ Installation

### Prerequisites
- Node.js (v14+)
- MongoDB Atlas account (free)
- Git

### Backend Setup

```bash
cd Backend
npm install
```

Create `.env` file:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/grocery_list
PORT=5000
NODE_ENV=development
```

Start the server:
```bash
npm run dev
```

Server runs on: `http://localhost:5000`

### Frontend Setup

```bash
cd "Grocery List"
npm install
```

Create `.env` file:
```
VITE_API_URL=http://localhost:5000/api/items
```

Start the app:
```bash
npm run dev
```

App runs on: `http://localhost:5173`

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/items` | Get all items |
| POST | `/api/items` | Create new item |
| PUT | `/api/items/:id` | Update item |
| DELETE | `/api/items/:id` | Delete item |

## 🌐 Live Demo

Coming soon! (Deploy to Heroku + Vercel)

## 📝 Usage

1. Start MongoDB locally or use MongoDB Atlas
2. Start the backend: `npm run dev` (in Backend folder)
3. Start the frontend: `npm run dev` (in Grocery List folder)
4. Open `http://localhost:5173` in your browser
5. Add your grocery items!

## 🚀 Deployment

See `DEPLOYMENT_GUIDE.md` for detailed deployment instructions for:
- Heroku (Backend)
- Vercel (Frontend)
- AWS, DigitalOcean, Azure

## 📦 Dependencies

### Backend
```json
{
  "express": "^4.18.2",
  "mongoose": "^7.0.0",
  "cors": "^2.8.5",
  "dotenv": "^16.0.3",
  "nodemon": "^2.0.20"
}
```

### Frontend
```json
{
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "vite": "^7.2.2"
}
```

## 🐛 Troubleshooting

**"Failed to fetch items" error:**
- Make sure backend is running
- Check MongoDB connection string
- Verify API_URL in frontend .env

**Port already in use:**
```bash
# Kill process on port 5000
lsof -ti:5000 | xargs kill -9  # macOS/Linux
netstat -ano | findstr :5000   # Windows
```

## 📚 Learning Resources

- [React Documentation](https://react.dev)
- [Express Documentation](https://expressjs.com)
- [MongoDB Documentation](https://docs.mongodb.com)
- [Vite Documentation](https://vitejs.dev)

## 📄 License

MIT License - feel free to use this project for learning and personal use.

## 👤 Author

Your Name

## 🤝 Contributing

Feel free to fork this project and submit pull requests!

---

**Made with ❤️ using MERN Stack**
