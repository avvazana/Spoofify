class Playlist < ApplicationRecord
  validates :author_id, presence: true

  belongs_to :author,
  foreign_key: :author_id,
  class_name: :User

  has_one_attached :photo
  has_one_attached :track
end
