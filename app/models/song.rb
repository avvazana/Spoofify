class Song < ApplicationRecord
  validates :playlist_id, presence: true

  belongs_to :album

  has_one_attached :song_file
  
  has_many :song_playlists
  # has_many :artists
end
