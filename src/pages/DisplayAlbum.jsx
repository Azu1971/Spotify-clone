import React, { useContext } from "react";
import Navbar from "../components/display/navbar/Navbar";
import { useParams } from "react-router-dom";
import { albumsData, songsData } from "../assets/assets";
import { assets } from "../assets/assets";
import "./displayAlbum.css";
import { PlayerContext } from "../context/PlayerContext";

const DisplayAlbum = () => {
  const { id } = useParams();
  const albumData = albumsData[id];
  const { playWithId } = useContext(PlayerContext);
  return (
    <div>
      <Navbar />
      <div className="display-album">
        <div className="top">
          <img
            src={albumData.image}
            alt={albumData.title}
            className="mainImage"
          />
          <div className="album-info">
            <p>Playlist</p>
            <h1>{albumData.name}</h1>
            <p>{albumData.desc}</p>
            <p>
              <img src={assets.spotify_logo} alt="" className="logo" />
              <b>Spotify</b> • 2,312,312 likes • <b>45 songs, </b>
              about 2 hr 15 min
            </p>
          </div>
        </div>
        <div className="table-headers">
          <p># Title</p>
          <p>Album</p>
          <p>Date Added</p>
          <img src={assets.clock_icon} alt="" className="clock" />
        </div>
        <hr />
        {songsData.map((song, index) => {
          return (
            <div
              className="song table-headers"
              key={index}
              onClick={() => playWithId(song.id)}
            >
              <div className="name-image">
                <p>
                  <b>{index + 1}</b>
                </p>
                <img src={song.image} alt={song.title} className="songImage" />
                <p>{song.name}</p>
              </div>
              <p>{albumData.name}</p>
              <p>5 days ago</p>
              <p>{song.duration}</p>
            </div>
          );
        })}
        {/* Closing the div for the song list */}
      </div>
    </div>
  );
};

export default DisplayAlbum;
