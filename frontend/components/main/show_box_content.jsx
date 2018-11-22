import React from 'react';
import NavBar from './navbar';
import { PulseLoader } from 'react-spinners';
import SongsIndexItem from './songs/songs_index_item';
import Header from './header';
import Modal from './modal';

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
          <SongsIndexItem key={song.id} song={song} playlist={playlist}/>
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
        <div>
          <NavBar className="nav" logout={logout.bind(this)}/>
        </div>

        <div className="show-body">

          <div className="body-items">
            <div className="playlist-show-item" key={playlist.id}>
              <div className="playlist-show-item-image">
                <img src={playlist.photoUrl}></img>
              </div>
              <div className="playlist-show-subtext">
                <p>{playlist.title}</p>
                <span>{playlist.author}</span>
              </div>
            </div>

            <div className="tracks">
              {tracks}
            </div>

          </div>
        </div>


        <Modal/>
      </div>
    );
  }
}
export default ShowBoxContent;
