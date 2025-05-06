import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import DisplayHome from "./DisplayHome.jsx";
import "./display.css";
import DisplayAlbum from "../../pages/DisplayAlbum.jsx";
import { useRef } from "react";
import { albumsData } from "../../assets/assets.js";
import { useLocation } from "react-router-dom";

export const Display = () => {
  const displayRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("/albums/");
  const albumId = isAlbum ? location.pathname.slice(-1) : "";
  const bgColor = albumsData[Number(albumId)].bgColor;

  useEffect(() => {
    if (isAlbum) {
      // displayRef.current.style.backgroundColor = `${bgColor}`;
      displayRef.current.style.background = `linear-gradient(${bgColor},#121212)`;
    } else {
      displayRef.current.style.backgroundColor = `#121212`;
    }
  });

  return (
    <div className="display" ref={displayRef}>
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/albums/:id" element={<DisplayAlbum />} />
      </Routes>
    </div>
  );
};
