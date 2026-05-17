import { RouterProvider } from "react-router";
import { Toaster } from "react-hot-toast";
import { router } from "./app.route.jsx";
import { AuthProvider } from "./features/auth/auth.context.jsx";
import { InterviewProvider } from "./features/interview/interview.context.jsx";

function App() {
  return (
    <AuthProvider>
      <InterviewProvider>
        <Toaster 
          position="top-right"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            className: '',
            duration: 4000,
            style: {
              background: '#1a1a1a',
              color: '#ffffff',
              fontSize: '0.95rem',
              borderRadius: '0.5rem',
              padding: '1rem',
              border: '1px solid #222222',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.4)',
              fontFamily: "'DM Sans', sans-serif",
            },
            success: {
              duration: 2000,
              style: {
                background: '#111111',
                border: '1px solid #3fb950',
                color: '#3fb950',
              },
              iconTheme: {
                primary: '#3fb950',
                secondary: '#111111',
              },
            },
            error: {
              duration: 4000,
              style: {
                background: '#111111',
                border: '1px solid #ff4d4d',
                color: '#ff4d4d',
              },
              iconTheme: {
                primary: '#ff4d4d',
                secondary: '#111111',
              },
            },
            loading: {
              style: {
                background: '#111111',
                border: '1px solid #555555',
                color: '#ffffff',
              },
              iconTheme: {
                primary: '#ffffff',
                secondary: '#111111',
              },
            },
          }}
        />
        <RouterProvider router={router} />
      </InterviewProvider>
    </AuthProvider>
  )
}

export default App