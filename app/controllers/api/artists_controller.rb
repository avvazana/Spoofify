class Api::ArtistsController < ApplicationController
  def index
    if search_query
      @artists = Artist.where('lower(title) LIKE ?', "%#{search_query.downcase}" )
    else
      @artists = Artist.all.includes(:songs)
    end
    render :index
  end

  def show
    @artist = Artist.includes(:songs).find(params[:id])
    render :show
  end

  private

  def artist_params
    params.require(:artist).permit(:name)
  end

  def search_query
    params[:search_query]
  end

end
