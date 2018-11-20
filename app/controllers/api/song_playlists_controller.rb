class Api::SongPlaylistsController < ApplicationController
  def create
     @song_playlists = SongPlaylists.new(song_playlist_params)
     @playlist_song.save
   end

   def destroy
   end

   private
   def song_playlist_params
     params.require(:song_playlist).permit(:song_id, :playlist_id)
   end
end

# class Api::PlaylistSongsController < ApplicationController
#
#   def create
#     @playlist_song = PlaylistSong.new(playlist_song_params)
#     @playlist_song.save
#   end
#
#   def destroy
#   end
#
#   private
#   def playlist_song_params
#     params.require(:playlist_song).permit(:song_id, :playlist_id)
#   end
# end
