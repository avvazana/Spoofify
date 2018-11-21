# == Schema Information
#
# Table name: song_playlists
#
#  id          :bigint(8)        not null, primary key
#  song_id     :integer
#  playlist_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class SongPlaylist < ApplicationRecord
  validates :playlist_id, :song_id, presence: true

  belongs_to :song
  belongs_to :playlist
end
