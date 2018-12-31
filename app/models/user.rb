# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  profile_pic_url :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :username, :session_token, :email, presence: true, uniqueness: true
  validates :password_digest, presence: {message: "Password can't be blank"}
  validates :password, length: {minimum: 6, allow_nil: true}

  after_initialize :ensure_session_token
  attr_reader :password

  has_one_attached :photo

  has_many :playlists,
    foreign_key: :author_id,
    class_name: :Playlist

  has_many :songs,
    through: :playlists,
    source: :songs

  has_many :albums,
    through: :playlists,
    source: :albums

  has_many :artists,
    through: :songs,
    source: :artists

  has_many :follows
  has_many :followed_artists, through: :follows, source: :followable, source_type: 'Artist'
  has_many :followed_playlists, through: :follows, source: :followable, source_type: 'Playlist'

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end
end
