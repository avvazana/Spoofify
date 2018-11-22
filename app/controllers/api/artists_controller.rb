class Api::ArtistsController < ApplicationController
  def index
    @artists = Artist.all.includes(:songs)
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
end
