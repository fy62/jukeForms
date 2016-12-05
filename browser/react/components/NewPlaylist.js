import React from 'react';
import PlaylistNameInput from './PlaylistNameInput';

class NewPlaylist extends React.Component {

  constructor(props) {
    super(props);
    console.log(this.props.postPlaylist);
    this.state = {value: '', didEnter: false};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value, didEnter: true});
  }
  handleSubmit(event) {
    // axios.post('/api/playlists', { name: this.state.value })
    //   .then(res => res.data)
    //   .then(result => {
    //     console.log(result) // response json from the server!
    //   });
    this.props.postPlaylist(this.state.value);
    this.setState({value: '', didEnter: false});
    event.preventDefault();
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