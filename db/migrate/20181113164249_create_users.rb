class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string 'username', null: false
      t.string 'email', null: false
      t.string 'password_digest', null: false
      t.string 'session_token', null: false
      t.string 'profile_pic_url'
      t.datetime 'created_at', null: false
      t.datetime 'updated_at', null: false
      t.index ['email'], name: 'index_users_email', unique: true
      t.index ['session_token'], name: 'index_users_session_token', unique: true
      t.index ['username'], name: 'index_users_username', unique: true
    end
  end
end
