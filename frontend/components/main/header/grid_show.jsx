import React from 'react';
import NavBar from '../navbar/navbar';
import { PulseLoader } from 'react-spinners';
import SongsIndexItem from './songs_index_item';
import Header from '../header/header';
import Modal from '../modals/modal';

class GridShow extends React.Component {
  constructor(props) {

    super(props);
    this.state = { loading: true };
    this.fetchElement = this.props.fetchPlaylist || this.props.requestSingleAlbum || this.props.fetchArtist;
    this.elementId = this.props.playlistId || this.props.albumId || this.props.artistId;
    this.fetchElement = this.fetchElement.bind(this);
    this.timeout = this.timeout.bind(this);
    this.handleFollow = this.handleFollow.bind(this);

  }

  timeout(){
    setTimeout(() => this.setState({loading: false}), 700);
  }

  componentDidMount(){
    this.fetchElement(this.elementId)
    .then( this.timeout );
  }

  handleFollow(e) {

    const following = this.props.currentUser.followed_artist_ids.includes(this.props.artist.id);
    const follow = {
      user_id: this.props.currentUser.id,
      followable_id: this.props.artist.id,
      followable_type: 'Artist'
    };

    following ? this.props.deleteFollow(follow) : this.props.createFollow(follow);
  }

  render () {

    function isDefined(song){
      return song ? true : false;
    }

    const {playlist, album, artist, logout, songs} = this.props;
    let tracks = '';
    let element = playlist || album || artist;
    if(songs.every(isDefined)){
       tracks = songs.map((song) => {
        return (
          <SongsIndexItem key={song.id || song.trackId} song={song} playlist={playlist} album={album} artist={artist}/>
        );
      });
    } else {
      tracks = (
        <div className="no-results">
          Nothing to see here...
        </div>
      );
    }

    // if (this.state.loading) {
    //   return (
    //     <div className='loading'>
    //       <PulseLoader
    //         sizeUnit={"px"}
    //         height={40}
    //         width={40}
    //         color={'#bbffe8'}
    //         loading={this.state.loading}
    //       />
    //     </div>
    //   );
    // }

    if (element.artworkUrl100) {
      element.artworkUrl100 = element.artworkUrl100.replace('100x100', '600x600');
    }

    let follows = "";
    if (this.props.artist) {
      follows = (
        <button className="follow-button"
            onClick={this.handleFollow}>
            {this.props.currentUser.followed_artist_ids.includes(this.props.artist.id) ? 'Unfollow' : 'Follow'}
        </button>
      );
    }

    return (
      <div className="main-container">
        <div className="show-body">
          <div className="body-items">
            <div className="playlist-show-item" key={element.id || element.collectionId}>
              <div className="playlist-show-item-image">
                <img src={element.photoUrl || element.artworkUrl100}></img>
              </div>
              <div className="playlist-show-subtext">
                <p>{element.title || element.name || element.collectionName}</p>
                <span>{element.author || element.artists || element.artistName}</span>
              </div>
              <div className="show-follow">
                {follows}
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
export default GridShow;
