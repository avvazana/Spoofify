class Api::SongsController < ApplicationController

  def index
    @songs = Song.all
    render :index
  end

  private

  def song_params
    params.require(:song).permit(:title, :album_id, :track)
  end

end
