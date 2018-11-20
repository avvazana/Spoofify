class Api::PlaylistsController < ApplicationController
  def show
    @playlist = Playlist.includes(:songs, :author).find(params[:id])
    render :show
  end

  def index
    @playlists = Playlist.all.includes(:songs, :author)
    render :index
  end

  private

  def playlist_params
    params.require(:playlist).permit(:title, :author_id)
  end
end
