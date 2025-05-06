import React from "react";
import Navbar from "./navbar/Navbar";
import { albumsData, songsData } from "../../assets/assets";
import AlbumItem from "./albumitem/AlbumItem";
import SongItem from "./albumitem/SongItem";

export const DisplayHome = () => {
  return (
    <div>
      <Navbar />
      <div className="album-list">
        <h1 className="FeaturedCharts">Featured Charts</h1>
        {albumsData.map((album) => (
          <AlbumItem
            key={album.id}
            id={album.id}
            name={album.name}
            desc={album.desc}
            image={album.image}
          />
        ))}
      </div>
      <div className="album-list">
        <h1>Today's biggest hits</h1>
        {songsData.map((song) => (
          <SongItem
            key={song.id}
            id={song.id}
            name={song.name}
            desc={song.desc}
            image={song.image}
          />
        ))}
      </div>
    </div>
  );
};

export default DisplayHome;
