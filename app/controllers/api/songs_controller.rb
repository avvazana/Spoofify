class SongsController < ApplicationController

  def index
  end

  def song_params
    params.require(:song).permit(:title, :album_id, :song_file)
  end

end
