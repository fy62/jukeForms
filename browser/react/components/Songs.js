import React from 'react';

const Songs = (props) => {

  const songs = props.songs;
  const currentSong = props.currentSong;
  const isPlaying = props.isPlaying;
  const toggle = props.toggleOne;
  const removeSong = props.removeSong;

  function clickRemove(songId) {
    removeSong(props.selectedPlaylist.id, songId);
  }

  return (
    <table className='table'>
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Artists</th>
          <th>Genre</th>
        </tr>
      </thead>
      <tbody>
        {
          songs && songs.map(song => (
            <tr key={song.id}>
              {
                (props.fromPlaylist)
                ? <td>
                  <button className="btn btn-default btn-xs" onClick={() => clickRemove(song.id)}>
                    <span className="glyphicon glyphicon-remove"></span>
                  </button>
                </td>
                : null
              }
              <td>
                <button className="btn btn-default btn-xs" onClick={() => toggle(song, songs)}>
                  <span className={song.id === currentSong.id && isPlaying ? "glyphicon glyphicon-pause" : "glyphicon glyphicon-play"}></span>
                </button>
              </td>
              <td>{ song.name }</td>
              <td>
                <span>{ song.artists ? song.artists.map(artist => artist.name).join(', ') : null }</span>
              </td>
              <td>{ song.genre }</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default Songs;
