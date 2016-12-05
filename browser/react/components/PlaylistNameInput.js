import React from 'react';

const PlaylistNameInput = (props) => {
  return (
    <form className="form-group" style={{marginTop: '20px'}} onSubmit={props.handleSubmit}>
        <input
          value={props.value}
          onChange={props.handleChange}
          className="form-control"
          placeholder="Enter playlist name"
        />
        {(props.value.length !== 0 && props.value.length < 17 || !props.didEnter)
          ? <input type='submit' value='Submit' />
          : <div>
              <input type='submit' value='Submit' disabled='true'/>
              <div className="alert alert-warning">Playlist must be between 1 and 16 characters long.</div>
            </div>
        }
      </form>
  );
}

export default PlaylistNameInput;