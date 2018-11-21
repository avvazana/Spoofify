import React from 'react';
import NavBar from './navbar';
import { PulseLoader } from 'react-spinners';


class ShowBoxContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount(){
    this.props.fetchPlaylist(this.props.playlistId)
    .then( () => setTimeout(() => this.setState({loading: false}), 700));
  }

  render () {
    const {playlist, logout, songs} = this.props;

    let tracks = '';
    if(songs[0]){
       tracks = songs.map( (song) => {
        return (
          <label>
            <audio src={song.trackUrl} controls>
            </audio>
          </label>
        );
      });
    } else {
      tracks = (
        <div className="no-results">
          Nothing to see here...
        </div>
      );
    }

    if (this.state.loading) {
      return (
        <div className='loading'>
          <PulseLoader
            sizeUnit={"px"}
            height={40}
            width={40}
            color={'#1DB954'}
            loading={this.state.loading}
          />
        </div>
      );
    }
    return (
      <div className="main-container">
        <NavBar className="nav" logout={logout.bind(this)}/>

        <div className="playlist-show-item" key={playlist.id}>
            <div className="playlist-show-item-image">
              <img src={playlist.photoUrl}></img>
            </div>
            <div className="playlist-show-subtext">
              <p>{playlist.title}</p>
              <span>{playlist.author}</span>
            </div>
        </div>
        <div>
          {tracks}
        </div>

      </div>
    );
  }
}
export default ShowBoxContent;
