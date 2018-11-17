import values from 'lodash/values';

export const selectAllPlaylists = state => Object.values(state.entities.playlists);
