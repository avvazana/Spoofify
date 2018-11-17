class Api::SongsController < ApplicationController

  def index
  end

  private
  
  def song_params
    params.require(:song).permit(:title, :album_id, :song_file)
  end

end
