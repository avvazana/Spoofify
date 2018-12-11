import React from 'react';
import GridIndexItem from './grid_index_item';

class GridIndex extends React.Component {

  constructor(props){
    super(props);
    this.fetchElements = props.fetchPlaylists || props.fetchArtists || props.fetchAlbums;
    this.fetchElements = this.fetchElements.bind(this);
  }

  componentDidMount(){
    this.fetchElements();
  }

  render(){
    const {playlists, artists, albums, navpath, path} = this.props;

    let gridElements = '';
    if (playlists) {
      gridElements = playlists;
    } else if (artists) {
      gridElements = artists;
    } else {
      gridElements = albums;
    }

    return (
      <div className="grid">
        <ul>
          {gridElements.map(element => <GridIndexItem key={element.id} element={element} navpath={navpath} path={path}/>)}
        </ul>
      </div>
    );
  }
}

export default GridIndex;
