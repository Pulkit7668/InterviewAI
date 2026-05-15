# Deployment Checklist - Fix 401 Unauthorized Issue

## Problem Summary
401 Unauthorized error when trying to fetch user data. This happens because:
- Frontend & backend on different domains (Vercel vs Render)
- Cookies not being sent with cross-domain requests
- Environment variables not configured correctly

## Solution Steps

### 1️⃣ Backend (Render) Environment Variables
Go to Render dashboard > Your backend service > Environment:

```
# Required variables
FRONTEND_URL=https://your-vercel-frontend-url.vercel.app
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-jwt-secret
```

⚠️ **Important**: Replace `your-vercel-frontend-url` with your actual Vercel URL

### 2️⃣ Frontend (Vercel) Environment Variables  
Go to Vercel dashboard > Your project > Settings > Environment Variables:

```
VITE_API_URL=https://interviewai-bixu.onrender.com
```

⚠️ **Important**: Use the exact Render backend URL that was provided to you

### 3️⃣ Verify Backend Logs
After deploying, check Render logs for:
- ✅ `Server is running on port 3000`
- ✅ `Connected to Database`
- ✅ `CORS enabled for origin: https://your-vercel-url.vercel.app`

If you see "CORS enabled for origin: undefined", the `FRONTEND_URL` is not set!

### 4️⃣ Test the Fix

1. **Login first**: Register/Login on your Vercel frontend
2. **Check cookies**: Open DevTools → Application → Cookies
   - Should see a `token` cookie from the Render domain
3. **Check network**: Open DevTools → Network
   - Look for `/api/auth/get-me` request
   - Response status should be 200 (not 401)
   - Request headers should include `Cookie: token=...`

### 5️⃣ If Still Getting 401

**Check Render Logs** for these patterns:
```
[AUTH] No token found in cookies
[AUTH] Available cookies: []
[AUTH] JWT verification failed
```

This means either:
- Cookie not being sent from frontend
- `sameSite` policy blocking it
- `secure` flag issue

**Quick Debug**: Add this to Vercel environment temporarily:
```
VITE_API_URL=http://localhost:3000
```
Then test locally. If it works locally but not on production, it's a cookies/CORS issue.

## Code Changes Made
✅ `auth.api.js` - Now handles 401 gracefully
✅ `useAuth.js` - Properly sets null user on auth failure  
✅ `app.js` - Added logging and fallback origin
✅ `auth.middleware.js` - Added debug logging

## Important URLs
- Render Backend: `https://interviewai-bixu.onrender.com`
- Your Vercel Frontend: `https://your-project-xxxx.vercel.app` (replace with actual)

## Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Still getting 401 | Make sure `FRONTEND_URL` is set on Render |
| Cookies not appearing | Check that both URLs are HTTPS |
| CORS error | Frontend URL must exactly match `FRONTEND_URL` env var |
| Page shows "loading forever" | Check browser console for errors |

## Testing Locally Before Deploying

```bash
# Terminal 1: Backend (port 3000)
cd Backend
npm run dev

# Terminal 2: Frontend (port 5173)  
cd Frontend
npm run dev

# In browser: http://localhost:5173
# Login and check if /api/auth/get-me returns user data
```

---

**If issue persists, check the Render logs for `[AUTH]` messages!**
