# == Schema Information
#
# Table name: song_artists
#
#  id         :bigint(8)        not null, primary key
#  song_id    :integer
#  artist_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class SongArtist < ApplicationRecord
  belongs_to :song
  belongs_to :artist
end
