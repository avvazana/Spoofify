# == Schema Information
#
# Table name: songs
#
#  id         :bigint(8)        not null, primary key
#  album_id   :integer          not null
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Song < ApplicationRecord
  validates :album_id, presence: true

  has_one_attached :track

  belongs_to :album

  has_many :song_playlists,
    foreign_key: :song_id,
    class_name: :SongPlaylist

  has_many :song_artists,
    foreign_key: :song_id,
    class_name: :SongArtist

  has_many :artists,
    through: :song_artists,
    source: :artist

  has_many :playlists,
    through: :song_playlists,
    source: :playlist
end
