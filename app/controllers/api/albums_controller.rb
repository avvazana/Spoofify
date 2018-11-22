class Api::AlbumsController < ApplicationController
  def index
    @albums = Album.all.includes(:songs)
    render :index
  end

  def show
    @album = Album.includes(:songs, :author).find(params[:id])
    render :show
  end

  private

  def album_params
    params.require(:album).permit(:title)
  end
end
