class Api::ArtistsController < ApplicationController
  def index
    @artists = Artist.all
    render :index
  end

  private

  def artist_params
    params.require(:artist).permit(:name)
  end
end
