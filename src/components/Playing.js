import React, { useContext } from "react";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import {Context} from "../Context.js";

function Playing() {
    const {song, handleSetSong}=useContext(Context);
    function handleClickNext(){
        handleSetSong(song.id+1);
    }
    function handleClickPre(){
        handleSetSong(song.id-1);
    }
    return ( 
        <div>
      <AudioPlayer
        className="play"
        src={song.url}
        layout="stacked-reverse"
        showSkipControls={true}
        showJumpControls={false}
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPre}
      />
    </div>
     );
}

export default Playing;