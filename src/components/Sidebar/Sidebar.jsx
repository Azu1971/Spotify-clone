import React from "react";
import { assets } from "../../assets/assets.js";
import "./sidebar.css";
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="Elements" onClick={() => navigate("/")}>
          <img src={assets.home_icon} alt="Home Icon" />
          <p>Home</p>
        </div>
        <div className="Elements">
          <img src={assets.search_icon} alt="Search Icon" />
          <p>Search</p>
        </div>
      </div>
      <div className="sidebar-header">
        <div className="Elements">
          <img src={assets.stack_icon} alt="Library Icon" />
          <p>Your Library</p>
          <div className="library-subicons">
            <img src={assets.arrow_icon} alt="Library Icon" />
            <img src={assets.plus_icon} alt="Library Icon" />
          </div>
        </div>
        <div className="create">
          <h3>Create your first playlist</h3>
          <p>it's easy we will help you</p>
          <button>Create Playlist</button>
        </div>
        <div className="create">
          <h3>Let's find some podcasts to follow</h3>
          <p>we'll keep you updated on new episodes</p>
          <button>Browse podcasts</button>
        </div>
      </div>
    </div>
  );
};
