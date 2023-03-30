import React, { useContext, useEffect, useState } from "react";
import {Context} from "../Context";
function ListSongs() {
    const {DataSongs, song, handleSetSong}=useContext(Context);
    const [currentSong, setCurrentSong]=useState(0);
    function onChangeSong(id){
       if(currentSong!==id){
           setCurrentSong(id);
           handleSetSong(id);
       }
    }
      useEffect(()=>{
        const currentSongIndex=DataSongs.findIndex(dataSongs=>dataSongs.id===song.id);
        setCurrentSong(currentSongIndex);
      }, [song]);
     
    return ( 
        <div className="overflow-y-scroll w-full col-span-2">
        <table className="w-full">
            <thead className="text-white">
              <tr>
              <th className="w-[10%]">#</th>
            <th className="text-left">Title</th>
            <th className="w-[10%]">Author</th>
            <th className="w-[10%]">
              <i className="fa fa-download"></i>
            </th>
              </tr>
            </thead>
            <tbody className="text-gray-400 max-h-96">
              {
                DataSongs.map((songs, index)=>(
                    <tr key={index} className={`bg-slate-800 h-12 hover:bg-slate-600 cursor-pointer ${currentSong === songs.id && 'bg-slate-600 text-teal-400'}`} onClick={()=>onChangeSong(songs.id)}>
                       <td>{songs.id+1}</td>
                       <td className="text-left">{songs.name}</td>
                       <td>{songs.author}</td>
                       <td><i className="fa fa-download"></i></td>
                    </tr>
                ))
              }
            </tbody>
        </table>
        </div>
     );
}

export default ListSongs;