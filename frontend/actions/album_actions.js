import * as APIUtil from '../util/album_api_util';

export const RECEIVE_SINGLE_ALBUM = 'RECEIVE_SINGLE_ALBUM';
export const RECEIVE_ALL_ALBUMS = 'RECEIVE_ALL_ALBUMS';

const receiveAlbums = (albums) => {
  return {
    type: RECEIVE_ALL_ALBUMS,
    albums
  };
};

const receiveAlbum = ({album, songs}) => {
  return {
    type: RECEIVE_SINGLE_ALBUM,
    album,
    songs
  };
};

export const fetchAlbums = (props) => dispatch => {

  return (
    APIUtil.fetchAlbums(props).then(
      res => dispatch(receiveAlbums(res))
    ));
};

export const fetchAlbum = (id) => dispatch => {

  return (
    APIUtil.fetchAlbum(id).then(
      res => dispatch(receiveAlbum(res))
    ));
};
