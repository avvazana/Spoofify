# == Schema Information
#
# Table name: playlists
#
#  id         :bigint(8)        not null, primary key
#  author_id  :integer
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Playlist < ApplicationRecord
  validates :author_id, presence: true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  has_many :song_playlists,
    foreign_key: :playlist_id,
    class_name: :SongPlaylist

  has_many :songs,
    through: :song_playlists,
    source: :song

  has_many :albums,
    through: :songs,
    source: :album

  has_one_attached :photo
  has_one_attached :track
end
