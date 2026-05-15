import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router";
import "../styles/navbar.scss";

const Navbar = () => {
  const { user, handleLogout, error } = useAuth();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [logoutError, setLogoutError] = useState(null);
  const navigate = useNavigate();

  const handleLogoutClick = async () => {
    try {
      setLogoutError(null);
      await handleLogout();
      setIsProfileOpen(false);
      navigate("/login");
    } catch (err) {
      setLogoutError("Failed to logout. Please try again.");
      console.error("Logout error:", err);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        {/* Logo Section */}
        <div className="navbar__logo" onClick={() => navigate("/")}>
          <div className="logo-icon">YA</div>
          <span className="logo-text">InterviewAI</span>
        </div>

        {/* User Profile Section */}
        <div className="navbar__user">
          <div
            className="profile-trigger"
            onClick={() => setIsProfileOpen(!isProfileOpen)}
          >
            <div className="user-avatar">
              {user?.username?.charAt(0).toUpperCase()}
            </div>
            <span className="username">{user?.username}</span>
            <svg className="dropdown-icon" viewBox="0 0 24 24">
              <path d="M7 10l5 5 5-5z" fill="currentColor" />
            </svg>
          </div>

          {/* Dropdown Menu */}
          {isProfileOpen && (
            <div className="profile-dropdown">
              <div className="profile-header">
                <div className="avatar-large">
                  {user?.username?.charAt(0).toUpperCase()}
                </div>
                <div className="user-info">
                  <p className="username-full">{user?.username}</p>
                  <p className="email">{user?.email}</p>
                </div>
              </div>

              <div className="profile-divider"></div>

              {logoutError && (
                <div className="error-message">
                  {logoutError}
                </div>
              )}

              <button
                className="logout-btn"
                onClick={handleLogoutClick}
              >
                <svg viewBox="0 0 24 24" className="logout-icon">
                  <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z" fill="currentColor" />
                </svg>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
