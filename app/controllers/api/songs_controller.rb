class Api::SongsController < ApplicationController

  def index
    # if song_ids
    @saved_playlist = current_user.playlists.first
    @songs = @saved_playlist.songs
    render :index
  end

  private

  def song_params
    params.require(:song).permit(:title, :album_id, :track, :playlist_id)
  end

  # def song_ids
  #   params[:song_ids]
  # end
  #
  # def search_term
  #   params[:search_term]
  # end

end
