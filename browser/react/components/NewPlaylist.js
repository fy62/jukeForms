import React from 'react';
import PlaylistNameInput from './PlaylistNameInput';
import {hashHistory } from 'react-router';

class NewPlaylist extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: '', didEnter: false};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value, didEnter: true});
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({value: '', didEnter: false});
    this.props.postPlaylist(this.state.value)
      .then(addedPlaylist => {
        console.log(addedPlaylist);
        hashHistory.push(`/playlist/${addedPlaylist.id}`)
      })

  }

  componentDidMount () {

  }

  render () {
    const inputValue = this.state.value;
    const filteredArtists = this.props.artists.filter(artist => artist.name.match(inputValue));
    return (


    <PlaylistNameInput value={this.state.value} handleChange={this.handleChange} handleSubmit={this.handleSubmit} didEnter={this.state.didEnter}/>
  )
  }
}

export default NewPlaylist;