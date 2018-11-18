# == Schema Information
#
# Table name: follows
#
#  id               :bigint(8)        not null, primary key
#  followeable_id   :integer
#  followeable_type :string
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class Follow < ApplicationRecord
  belongs_to :followeable_id
end
