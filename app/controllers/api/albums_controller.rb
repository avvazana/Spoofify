class Api::AlbumsController < ApplicationController
  def index
    if search_query
      @albums = Album.where('lower(title) LIKE ?', "%#{search_query.downcase}" )
    else
      @albums = Album.all.includes(:songs)
    end
    render :index
  end

  def show
    @album = Album.includes(:songs, :artists).find(params[:id])
    render :show
  end

  private

  def album_params
    params.require(:album).permit(:title)
  end

  def album_ids
    params[:album_ids]
  end

  def search_query
    params[:search_query]
  end
end
