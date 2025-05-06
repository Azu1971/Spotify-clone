import { useNavigate } from "react-router-dom";
import "./AlbumItem.css"; // Import the CSS file for styling

const AlbumItem = ({ id, name, desc, image }) => {
  const navigate = useNavigate();
  return (
    <div className="album" onClick={() => navigate(`/albums/${id}`)}>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{desc}</p>
    </div>
  );
};

export default AlbumItem;
