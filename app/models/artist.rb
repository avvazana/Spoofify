# == Schema Information
#
# Table name: artists
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Artist < ApplicationRecord
  validates :name, presence: true

  has_one_attached :photo

  has_many :song_artists,
    foreign_key: :artist_id,
    class_name: :SongArtist

  has_many :songs,
    through: :song_artists,
    source: :song

  has_many :albums,
    through: :songs,
    source: :album
end
