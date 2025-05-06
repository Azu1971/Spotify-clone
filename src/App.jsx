import React, { useContext } from "react";
import { Sidebar } from "./components/Sidebar/Sidebar.jsx";
import { Player } from "./components/player/Player.jsx";
import { Display } from "./components/display/Display.jsx";
import { PlayerContext } from "./context/PlayerContext.jsx";

export const App = () => {
  const { audioRef, track } = useContext(PlayerContext);
  return (
    <div className="App">
      <Sidebar />
      <Display />
      <Player />
      <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </div>
  );
};

export default App;
