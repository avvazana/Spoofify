class Api::AlbumsController < ApplicationController
  def index
    @albums = Album.all
    render :index
  end

  private

  def album_params
    params.require(:album).permit(:title)
  end
end
