import React from "react";
import { assets } from "../../../assets/assets";
import "./navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div>
          <img src={assets.arrow_left} alt="" onClick={() => navigate(-1)} />{" "}
          {/* Added onClick for navigation */}
          <img
            src={assets.arrow_right}
            alt=""
            onClick={() => navigate(1)}
          />{" "}
          {/* Added onClick for navigation */}
        </div>
        <div>
          <button className="white">Explore Premium</button>
          <button className="black">Install App</button>
          <button className="username">M</button>
        </div>
      </div>
      <div>
        <button className="white">All</button>
        <button className="black">Music</button>
        <button className="black">Podcasts</button>
      </div>
    </div>
  );
};

export default Navbar;
