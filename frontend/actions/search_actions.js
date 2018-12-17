import * as SearchApiUtil from '../util/search_api_util';

export const RECEIVE_ALL_ALBUMS = 'RECEIVE_ALL_ALBUMS';
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';

export const requestAllAlbums = (searchQuery) => {

  return (dispatch) => {

    return SearchApiUtil.fetchAllAlbums(searchQuery)
      .then(null,
        (response) => {
          dispatch(receiveAllAlbums(JSON.parse(response.responseText).results));
        });
  };
};

export const requestSingleAlbum = (searchQuery) => {
  return (dispatch) => {
    return SearchApiUtil.fetchSingleAlbum(searchQuery)
      .then(null,
        (response) => {
          dispatch(receiveSingleAlbum(JSON.parse(response.responseText).results[0]));
        });
  };
};

export const receiveAllAlbums = (albums) => {

  return {
    type: RECEIVE_ALL_ALBUMS,
    albums
  };
};

export const receiveSingleAlbum = (album) => {
  return {
    type: RECEIVE_ALBUM,
    album
  };
};
