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

class Song_playlist < ApplicationRecord
  belongs_to :song
  belongs_to :playlist
end
