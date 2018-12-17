class Api::SongsController < ApplicationController

  def index
    
    if search_query
      @songs = Song.where('lower(title) LIKE ?', "%#{search_query.downcase}" )
    else
      @saved_playlist = current_user.playlists.first
      @songs = @saved_playlist.songs
    end
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
  def search_query
    params[:search_query]
  end

end
