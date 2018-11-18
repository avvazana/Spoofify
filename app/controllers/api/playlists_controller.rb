class Api::PlaylistsController < ApplicationController
  def index
    @playlists = Playlist.all
    render :index
  end

  private

  def playlist_params
    params.require(:playlist).permit(:title, :author_id)
  end
end
