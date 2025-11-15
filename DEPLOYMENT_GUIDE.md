# Grocery List MERN App - Deployment Guide

## ✅ Project Status: Ready for Deployment

Your MERN (MongoDB, Express, React, Node.js) application is fully configured and ready to deploy!

---

## 📁 Project Structure

```
mern project/
├── Backend/                 # Node.js + Express API Server
│   ├── config/db.js        # MongoDB connection
│   ├── models/GroceryItem.js
│   ├── routes/groceryRoutes.js
│   ├── server.js           # Main server file
│   ├── package.json
│   ├── .env                # Environment variables
│   └── .gitignore
│
└── Grocery List/           # React Frontend (Vite)
    ├── src/
    │   ├── App.jsx         # Main component
    │   ├── App.css
    │   └── main.jsx
    ├── package.json
    ├── vite.config.js
    ├── .env                # Environment variables
    └── .gitignore
```

---

## 🚀 Deployment Options

### Option 1: Deploy to Heroku (Recommended for Backend)

**Backend Deployment:**

1. Install Heroku CLI: https://devcenter.heroku.com/articles/heroku-cli
2. Navigate to Backend folder:
   ```bash
   cd Backend
   heroku login
   heroku create your-app-name
   git push heroku main
   ```

3. Set environment variables:
   ```bash
   heroku config:set MONGODB_URI=your_mongodb_atlas_uri
   ```

4. Your backend will be available at: `https://your-app-name.herokuapp.com`

---

### Option 2: Deploy Frontend to Vercel (Recommended)

**Frontend Deployment:**

1. Install Vercel CLI or use GitHub integration
2. Navigate to Grocery List folder:
   ```bash
   cd "Grocery List"
   npm run build
   ```

3. Deploy using Vercel:
   ```bash
   vercel
   ```

4. Set environment variable in Vercel dashboard:
   ```
   VITE_API_URL=https://your-app-name.herokuapp.com/api/items
   ```

---

### Option 3: Deploy Both to AWS

**Using Elastic Beanstalk (Backend) + S3 + CloudFront (Frontend)**

See AWS documentation for detailed steps.

---

## 🔧 Local Testing Checklist

Before deploying, verify everything works locally:

### Backend
```bash
cd Backend
npm install
npm run dev
```
✅ Should see: "Server running on port 5000" + "MongoDB Connected"

### Frontend
```bash
cd "Grocery List"
npm install
npm run dev
```
✅ Should see: App running on http://localhost:5173
✅ Can add/delete/complete items

---

## 📝 Environment Variables

### Backend (.env)
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/grocery_list?retryWrites=true&w=majority
PORT=5000
NODE_ENV=production
```

### Frontend (.env)
```
VITE_API_URL=https://your-backend-domain.com/api/items
```

---

## 🔒 Security Checklist

- ✅ `.env` files are in `.gitignore` (secrets not exposed)
- ✅ CORS is enabled in backend for frontend domain
- ✅ Input validation in backend routes
- ✅ MongoDB Atlas IP whitelist configured

---

## 📊 API Endpoints (Live)

Once deployed, your API will have these endpoints:

```
GET    /api/items              - Get all items
POST   /api/items              - Create item
PUT    /api/items/:id          - Update item
DELETE /api/items/:id          - Delete item
```

---

## 🎯 Quick Start for Deployment

### 1. Backend (Heroku)
```bash
cd Backend
heroku create your-grocery-app
git push heroku main
heroku config:set MONGODB_URI=your_mongodb_uri
```

### 2. Frontend (Vercel)
```bash
cd "Grocery List"
npm run build
vercel
# Set VITE_API_URL to your Heroku backend URL
```

---

## ✨ Features Included

- ✅ Add grocery items
- ✅ Mark items as complete/incomplete
- ✅ Delete items
- ✅ Real-time updates from MongoDB
- ✅ Responsive design
- ✅ Error handling
- ✅ Loading states

---

## 🆘 Troubleshooting

**"Failed to fetch items" error:**
- Ensure backend is running
- Check MongoDB connection string
- Verify CORS is enabled
- Check frontend API_URL is correct

**Frontend can't connect to backend:**
- Update VITE_API_URL in frontend .env
- Ensure backend server is deployed and running
- Check CORS headers in backend

---

## 📞 Support

For questions about:
- **Heroku**: https://devcenter.heroku.com/
- **Vercel**: https://vercel.com/docs
- **MongoDB Atlas**: https://docs.atlas.mongodb.com/
- **React/Vite**: https://vitejs.dev/

---

**You're all set! Your MERN app is ready to go live! 🚀**
