import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  const [user, googleUser] = useAuthState(auth);
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/shop">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/about">About</Link>
        {user ? (
          <button className="sign-out-btn" onClick={() => signOut(auth)}>
            sign Out
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}
        <span>
          <p style={{ display: "inline", color: "white", marginLeft: "10px" }}>
            {user?.displayName && user.displayName}
          </p>
        </span>
      </div>
    </nav>
  );
};

export default Header;
