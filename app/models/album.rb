class Album < ApplicationRecord
  has_many :songs,
  foreign_key: :album_id,
  class_name: :Song

end
