import "./AlbumItem.css"; // Import the CSS file for styling
import { useContext } from "react";
import { PlayerContext } from "../../../context/PlayerContext.jsx"; // Adjust the import path as necessary

const AlbumItem = ({ id, name, desc, image }) => {
  const { playWithId } = useContext(PlayerContext); // Use the context to get the play function
  return (
    <div className="album" onClick={() => playWithId(id)}>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{desc}</p>
    </div>
  );
};

export default AlbumItem;
