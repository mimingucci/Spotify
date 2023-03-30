import React, { useContext, useEffect, useState } from "react";
import {Context} from "../Context";
function DetailSong() {
    const {song}=useContext(Context);
    const [info, setInfo]=useState({name: song.name, artist: song.author});
    useEffect(()=>{
        setInfo({name: song.name, artist: song.author});
    }, [song]);
    return (  
        <div className="pl-4 col-span-1">
            <p className="text-lg font-bold text-cyan-500">Now playing</p>
            <h4 className="text-2xl text-gray-400">{info.name}</h4>
            <div className="flex justify-center items-center mt-16">
                <img className="w-7/12 items-center" src="https://i.scdn.co/image/ab6761610000e5ebc02d416c309a68b04dc94576" alt="Avatar"></img>
            </div>
            <div className="flex grid grid-cols-2 mt-4 pb-5">
                <div className="col-span-1 items-center flex justify-center">
                <img className="w-1/4 text-center rounded-full" src="https://i.scdn.co/image/ab6761610000e5ebc02d416c309a68b04dc94576" alt="Avatar"></img>
                </div>
                <div className="col-span-1 items-center ">
                <h3 className="font-medium text-2xl text-white">{info.artist}</h3>
                </div>
            </div>
        </div>
    );
}

export default DetailSong;