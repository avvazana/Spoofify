class Api::SongsController < ApplicationController

  def index
    @saved_playlist = current_user.playlists.first
    @songs = @saved_playlist.songs
    render :index
  end

  private

  def song_params
    params.require(:song).permit(:title, :album_id, :track, :playlist_id)
  end
#
end
