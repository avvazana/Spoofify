class Api::SongPlaylistsController < ApplicationController
  def create
     @song_playlists = SongPlaylist.new(song_playlist_params)
     @song_playlists.save
   end

   def destroy
   end

   def song_playlist_params

     params.require(:song_playlist).permit(:playlist_id, :song_id)
   end
end
