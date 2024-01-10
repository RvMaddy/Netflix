import React from "react";
import Logo from "../../logo.svg";
import Button from "../button/Button";
import "./nav.css";
import { Link, useNavigate } from "react-router-dom";

export const Nav = ({ isUser }) => {
  const logout = () => {
    localStorage.removeItem("user");
    logoutNav("/");
  };

  const navigate = useNavigate();
  const logoutNav = useNavigate();
  return (
    <div className="navbar">
      <div className="logo-img">
        <img src={Logo} alt="netflix logo" />

        {isUser && (
          <div className="nav">
            <ul>
              <Link to="/home" className="link">
                Home
              </Link>
              <Link to="/mylist" className="link">
                My List
              </Link>
              <Link to="/search" className="link">
                Search
              </Link>
            </ul>
          </div>
        )}
      </div>

      {isUser ? (
        <div className="log-container">
          <Button
            size="medium"
            rounded="rounded"
            color="white"
            bg="bg-1"
            value="Log Out"
            onclick={() => logout()}
          />
        </div>
      ) : (
        <div className="navbar-topright">
          <div className="language-select">
            <select name="language" id="language">
              <option value="english">English</option>
              <option value="hindi">हिंदी</option>
            </select>
          </div>

          <Button
            size="small"
            rounded="rounded"
            color="white"
            bg="bg-1"
            value="Sign In"
            onclick={() => navigate("signin")}
          />
        </div>
      )}
    </div>
  );
};

export default Nav;
