# == Schema Information
#
# Table name: follows
#
#  id               :bigint(8)        not null, primary key
#  followeable_id   :integer
#  followeable_type :string
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  user_id          :integer
#

class Follow < ApplicationRecord
  validates :user_id, :followable_id, :followable_type, presence: true
  validates :user_id, uniqueness: { :scope => [:followable_type, :followable_id] }

  belongs_to :user
  belongs_to :followable, polymorphic: true
end
