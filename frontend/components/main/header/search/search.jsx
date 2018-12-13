import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import SearchResults from './search_results';

class Search extends React.Component {
  constructor(props) {
    
    super(props);
    this.state = { searchTerm: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    
    this.setState({ searchTerm: e.target.value });
  }

  render () {
    
    let results;
    if (this.state.searchTerm) {
      results = (
        <div className="search-results-container">
          <SearchResults searchTerm={this.state.searchTerm} />
        </div>
      );
    } else {
      results = (
        <div className="search-header">
          <h2>Search Spoofify</h2>
          <p>Find your favorite songs, artists, albums, podcasts and playlists.</p>
        </div>
      );
    }

    return (
      <div className="search-container">
        <div className="modal-input-container">
          <input className="modal-input" type="text" value={this.state.searchTerm}
            placeholder="Start typing..." onChange={this.handleChange}/>
        </div>
        {results}
      </div>
    );
  }
}

export default Search;
