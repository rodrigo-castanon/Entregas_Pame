import React from 'react';
import './style.css';

const MusicList = ({songs}) => (

  <div className="container">

    {songs.map(song =>(
      <div className="music" key={song.id}>
          <header>
            <img src={song.thumbnail} alt={song.album}/>
            <strong>{song.title}</strong>
            <small>{song.author}</small>
          </header>
          <ul>
            <li>
              {song.album}<small>Album</small>
            </li>
            <li>
              {song.plays}<small>Plays</small>
            </li>
            <li>
              {song.ranking}<small>Ranking</small>
            </li>
            <li>
              {song.date} <small>Data</small>
            </li>
          </ul>
      </div>
    ))}
        
  </div>
)

export default MusicList;