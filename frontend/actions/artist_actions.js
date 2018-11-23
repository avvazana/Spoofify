import * as APIUtil from '../util/artist_api_util';

export const RECEIVE_SINGLE_ARTIST = 'RECEIVE_SINGLE_ARTIST';
export const RECEIVE_ALL_ARTISTS = 'RECEIVE_ALL_ARTISTS';

const receiveArtists = (artists) => {
  return {
    type: RECEIVE_ALL_ARTISTS,
    artists
  };
};

const receiveArtist = ({artist, songs}) => {
  return {
    type: RECEIVE_SINGLE_ARTIST,
    artist,
    songs
  };
};
