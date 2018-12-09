class Api::PlaylistsController < ApplicationController
  def show
    @playlist = Playlist.includes(:songs, :author).find(params[:id])
    render :show
  end

  def index
    @playlists = Playlist.all.includes(:songs, :author)
    render :index
  end

  def create
    @playlist = Playlist.new(playlist_params)
    @playlist.author_id = current_user.id

    if (@playlist.save)
      render :show
    else
      render json: @playlist.errors.full_messages, status: 422
    end
  end
  #
  # def add_song
  #   @playlist = Playlist.find(params[:playlist_id])
  #   @song = Song.find(params[:song_id])
  #   @playlist.songs += [@song]
  # end

  private

  def playlist_params
    params.require(:playlist).permit(:title, :author_id)
  end
end
