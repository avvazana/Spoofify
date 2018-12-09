class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      # the first playlist for a user will be the 'saved' songs playlist
      @user.playlists += [Playlist.create(title: 'Saved')]
      login!(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    @artists = [Artist.first, Artist.second, Artist.third, Artist.fourth, Artist.fifth]
    render :show
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
