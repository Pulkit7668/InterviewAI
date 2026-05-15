# InterviewAI - AI-Powered Interview Preparation Platform

## 🚀 Overview

InterviewAI is a full-stack web application that uses AI to generate personalized interview preparation plans. Upload your resume, describe your background, and get a tailored interview roadmap with technical questions, behavioral insights, and a skill gap analysis.

## 🎯 Features

- ✅ **AI-Generated Interview Plans** - Get personalized questions based on job description
- ✅ **Resume Analysis** - Upload PDF resume for AI-powered evaluation
- ✅ **Multiple Question Types** - Technical, Behavioral, and Roadmap sections
- ✅ **Match Score** - Get a compatibility score with the job
- ✅ **Skill Gap Analysis** - Identify areas to improve
- ✅ **Secure Authentication** - JWT-based auth with blacklist system
- ✅ **Dark Theme UI** - Modern, minimal design with smooth UX

## 📚 Tech Stack

### Backend
- **Node.js + Express** - Server framework
- **MongoDB** - Database
- **JWT** - Authentication
- **Google GenAI** - AI for question generation
- **Puppeteer** - PDF handling
- **Multer** - File upload

### Frontend
- **React + Vite** - UI framework
- **SCSS** - Styling
- **React Router** - Navigation
- **Axios** - HTTP client
- **Context API** - State management

## 🏃 Local Development

### Backend Setup
```bash
cd Backend
npm install
cp .env.example .env
# Fill in your .env with:
# - MONGODB_URI
# - JWT_SECRET
# - GOOGLE_API_KEY
npm run dev
```

### Frontend Setup
```bash
cd Frontend
npm install
npm run dev
```

App runs at `http://localhost:5173`

## 🌐 Deployment

### Backend (Render.com)
1. Push code to GitHub
2. Create new Web Service on Render
3. Set environment variables from `.env.example`
4. Deploy

### Frontend (Vercel)
1. Import from GitHub
2. Root Directory: `Frontend`
3. Set `VITE_API_URL` environment variable
4. Deploy

## 📋 Environment Variables

### Backend (.env)
```
PORT=3000
NODE_ENV=production
MONGODB_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
GOOGLE_API_KEY=your_api_key
FRONTEND_URL=https://your-frontend.com
```

### Frontend (.env)
```
VITE_API_URL=https://your-backend.com
```

## 🔐 Security Features

- ✅ JWT token blacklist on logout
- ✅ Password hashing with bcryptjs
- ✅ CORS protection
- ✅ Cookie-based token storage
- ✅ Protected routes with middleware

## 📞 Support

For issues or questions, please open a GitHub issue.

## 📄 License

ISC

---

**Built with ❤️ using AI** | © 2026 InterviewAI
