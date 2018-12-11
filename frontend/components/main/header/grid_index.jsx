import React from 'react';
import GridIndexItem from './grid_index_item';

class GridIndex extends React.Component {

  constructor(props){
    debugger
    super(props);
    this.fetchElements = props.fetchPlaylists || props.fetchArtists || props.fetchAlbums;
    this.fetchElements = this.fetchElements.bind(this);
  }

  componentDidMount(){
    debugger
    this.fetchElements(
      {search_term: this.props.searchTerm}
    );
  }

  componentWillReceiveProps(nextProps) {
    debugger
    if (nextProps.searchTerm && this.props.searchTerm !== nextProps.searchTerm) {
      this.fetchElements({
        search_term: nextProps.searchTerm
      });
    }
  }

  render(){
    const {playlists, artists, albums, navpath, path} = this.props;

    let gridElements = [];
    if (playlists) {
      gridElements = playlists;
    } else if (artists) {
      gridElements = artists;
    } else {
      gridElements = albums;
    }
    debugger
    let filteredElements = [];
    if (this.props.searchTerm && gridElements) {
      filteredElements = gridElements.filter(a => a.title.toLowerCase().includes(this.props.searchTerm.toLowerCase()));
    } else {
      filteredElements = gridElements;
    }
    debugger

    return (
      <div className="grid">
        <ul>
          {filteredElements.map(element => <GridIndexItem key={element.id} element={element} navpath={navpath} path={path}/>)}
        </ul>
      </div>
    );
  }
}

export default GridIndex;
