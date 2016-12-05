import React from 'react';
import Songs from './Songs';
import SongAdder from './SongAdder';
import { Link } from 'react-router';

class SinglePlaylist extends React.Component {
  // constructor(props){
  //   super(props);
  //   console.log(React.Component);
  //   console.log(this.props);

  // }

  componentDidMount () {
    const selectPlaylist = this.props.selectPlaylist;
    const playlistId = this.props.routeParams.playlistId;

    selectPlaylist(playlistId);
  }

  componentWillReceiveProps (nextProps) {
    const nextPlaylistId = nextProps.routeParams.playlistId;
    const currentPlaylistId = this.props.routeParams.playlistId;
    const selectPlaylist = this.props.selectPlaylist;
    if (nextPlaylistId !== currentPlaylistId)
      selectPlaylist(nextPlaylistId);
  }

  render () {

    return (
      <div>
        <h3>{ this.props.selectedPlaylist.name }</h3>
        <Songs songs={this.props.selectedPlaylist.songs} currentSong={this.props.currentSong} isPlaying={this.props.isPlaying} toggleOne={this.props.toggleOne}/> {/** Hooray for reusability! */}
        { this.props.selectedPlaylist.songs && !this.props.selectedPlaylist.songs.length && <small>No songs.</small> }
        <hr />
        <SongAdder songs={this.props.songs} postSong={this.props.postSong} selectedPlaylist={this.props.selectedPlaylist}/>
      </div>
    );
  }
}

export default SinglePlaylist;