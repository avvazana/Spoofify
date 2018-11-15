class Song_playlist < ApplicationRecord
  belongs_to :song
  belongs_to :playlist
end
