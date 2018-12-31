import React from 'react';
import GridIndexItem from './grid_index_item';

class GridIndex extends React.Component {

  constructor(props){
    super(props);
    this.fetchElements = props.fetchPlaylists || props.fetchArtists || props.requestAllAlbums;
    // props.fetchAlbums
    this.fetchElements = this.fetchElements.bind(this);
  }

  componentDidMount(){
    
    this.fetchElements(
      {search_term: this.props.searchTerm}
    );
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.searchTerm && this.props.searchTerm !== nextProps.searchTerm) {
      this.fetchElements({
        search_term: nextProps.searchTerm
      });
    }
  }

  render(){
    
    const {playlists, artists, albums, navpath, path} = this.props;
    let property = "title";
    let gridElements = [];
    if (playlists) {
      gridElements = playlists;
    } else if (artists) {
      gridElements = artists;
      property = "name";
    } else {
      gridElements = albums;
    }
    let filteredElements = [];
    if (this.props.searchTerm && gridElements && !artists && !albums) {
      filteredElements = gridElements.filter(a => a.title.toLowerCase().includes(this.props.searchTerm.toLowerCase()));
    } else if (this.props.searchTerm && gridElements && !albums) {
      filteredElements = gridElements.filter(a => a.name.toLowerCase().includes(this.props.searchTerm.toLowerCase()));
    }
    else {
      filteredElements = gridElements;
    }

    return (
      <div className="grid">
        <ul>
          {filteredElements.map(element => <GridIndexItem key={element.id || element.collectionId} element={element} navpath={navpath} path={path}/>)}
        </ul>
      </div>
    );
  }
}

export default GridIndex;
