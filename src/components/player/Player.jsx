import React from "react";
import "./Player.css"; // Assuming you have a CSS file for styling
import { songsData, assets } from "../../assets/assets"; // Adjust the import path as necessary
import { useContext } from "react";
import { PlayerContext } from "../../context/PlayerContext.jsx"; // Adjust the import path as necessary

export const Player = () => {
  const {
    seekBar,
    seekBg,
    playStatus,
    play,
    pause,
    track,
    time,
    previous,
    next,
    seekSong,
  } = useContext(PlayerContext);
  return (
    <div className="player">
      <div className="song">
        <img src={track.image} alt="" />
        <div>
          <p>{track.name}</p>
          <p>{track.desc.slice(0, 20)}...</p>
        </div>
      </div>
      <div className="player-controls">
        <div className="player-images">
          <img src={assets.shuffle_icon} alt="" />
          <img src={assets.prev_icon} alt="" onClick={previous} />
          {playStatus ? (
            <img src={assets.pause_icon} alt="" onClick={pause} />
          ) : (
            <img src={assets.play_icon} alt="" onClick={play} />
          )}
          <img src={assets.next_icon} alt="" onClick={next} />
          <img src={assets.loop_icon} alt="" />
        </div>
        <div className="player-time">
          <p>
            {time.currentTime.minute}:{time.currentTime.second}
          </p>
          <div className="progress-bar" ref={seekBg} onClick={seekSong}>
            <hr ref={seekBar} className="progress" />
          </div>
          <p>
            {time.totalTime.minute}:{time.totalTime.second}
          </p>
        </div>
      </div>
      <div className="right-icons">
        <img src={assets.play_icon} />
        <img src={assets.mic_icon} />
        <img src={assets.queue_icon} />
        <img src={assets.speaker_icon} />
        <img src={assets.volume_icon} />
        <div>
          <hr className="volume" />
        </div>
        <img src={assets.mini_player_icon} />
        <img src={assets.zoom_icon} />
      </div>
    </div>
  );
};
