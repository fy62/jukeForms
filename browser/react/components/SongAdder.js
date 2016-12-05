import React from 'react';

class SongAdder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      isRepeat: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  checkFirst(songs) {
      const ids = songs.map(song => Number(song.id));
      return (ids.indexOf(1) === -1);
  }
  handleChange(event) {
    const songs = this.props.selectedPlaylist.songs.map(song => Number(song.id));
    console.log(songs);
    if (songs.indexOf(Number(event.target.value)) !== -1) {

      console.log('found repeat: ', event.target.value);
      this.setState({value: event.target.value, isRepeat: true});
    }
    else this.setState({value: event.target.value, isRepeat: false});
  }
  handleSubmit(event) {
    event.preventDefault();
    if (this.state.value != 0) {
    this.props.postSong(this.props.selectedPlaylist.id, this.state.value)
      .then(addedSong => {
        this.setState({value: 0, isRepeat: false});
        console.log(addedSong);
        //hashHistory.push(`/playlist/${addedPlaylist.id}`)
      })
    }
      // .catch(err => {
      //   this.setState({value: 1, isRepeat: true});
      // })

  }

  render() {
      return (
      <div className="well">
      <form className="form-horizontal" noValidate name="songSelect" onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>Add to Playlist</legend>
          <div className="form-group">
            <label htmlFor="song" className="col-xs-2 control-label">Song</label>
            <div className="col-xs-10">
              <select className="form-control" name="song" onChange={this.handleChange}>
                <option value={0}>--Select a song--</option>
                {
                  this.props.songs && this.props.songs.map(song =>
                    (
                      <option value={song.id} key={song.id}>{song.name}</option>
                    )
                  )
                }
              </select>
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-10 col-xs-offset-2">
              {
                !(this.state.isRepeat)
                ? <button type="submit" className="btn btn-success" >Add Song</button>
                : <div>
                  <button type="submit" className="btn btn-success" disabled='true'>Add Song</button>
                  <div className="alert alert-warning">You've already added that song.</div>
                </div>
              }
            </div>
          </div>
        </fieldset>
      </form>
    </div>
    );
  }
}

export default SongAdder;