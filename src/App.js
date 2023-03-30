import './App.css';
import NavBar from './components/NavBar';
import DetailSong from './components/DetailSong';
import ListSongs from './components/ListSongs';
import {Context} from './Context';
import DataSongs from './Data/songs.json';
import { useState } from 'react';
import Playing from './components/Playing';

function App() {
  const [song, setSong]=useState(DataSongs[0]);
  function handleSetSong(id){
     const s=DataSongs.find(e=>e.id===id);
     if(!s){
      setSong(DataSongs[0]);
     }
     else{
      setSong(DataSongs[id]);
     }
  }
  return (
    <div className="App">
      <Context.Provider value={{DataSongs, song, handleSetSong}}>
      <NavBar/>
    
    <div className='grid flex grid-cols-3 bg-slate-700 pt-3 h-[510px] overflow-hidden'>
       <DetailSong />
       <ListSongs />
   </div>
   <Playing/>
   </Context.Provider>
  
   </div>
  );
}

export default App;
