import React from 'react';
import Artists from './Artists';
import FilterInput from './FilterInput';

class FilterableArtistsContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  componentDidMount () {

  }

  render () {
    const inputValue = this.state.value;
    const filteredArtists = this.props.artists.filter(artist => artist.name.match(inputValue));
    return (
    <div>
      <FilterInput handleChange={this.handleChange} value={this.state.value}/>
      <Artists artists={filteredArtists} />
    </div>
  )
  }
}

export default FilterableArtistsContainer;