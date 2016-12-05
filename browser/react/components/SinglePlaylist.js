import React from 'react';
import Songs from './Songs';
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
        <Songs songs={this.props.selectedPlaylist.songs} /> {/** Hooray for reusability! */}
        { this.props.selectedPlaylist.songs && !this.props.selectedPlaylist.songs.length && <small>No songs.</small> }
        <hr />
      </div>
    );
  }
}

export default SinglePlaylist;