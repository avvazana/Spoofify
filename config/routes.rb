Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    get('albums/get_albums', { to: 'albums#get_albums' })
    resources :users, only: [:show, :create]
    resource :session, only: [:create, :destroy]
    resources :songs, only: [:index, :show]
    resources :playlists, only: [:create, :index, :show, :destroy] do
      resources :songs, only: [:index]
    end
    resources :albums, only: [:index, :show]
    resources :artists, only: [:index, :show]
    resources :follows, only: [:create, :destroy]
    resources :song_playlists, only: [:create, :destroy]
  end
end
