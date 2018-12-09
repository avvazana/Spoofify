# == Schema Information
#
# Table name: albums
#
#  id         :bigint(8)        not null, primary key
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Album < ApplicationRecord
  has_many :songs,
    foreign_key: :album_id,
    class_name: :Song

  has_many :artists,
    through: :songs,
    source: :artists

  has_one_attached :photo
end
