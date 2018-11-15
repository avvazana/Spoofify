class CreatePlaylists < ActiveRecord::Migration[5.2]
  def change
    create_table :playlists do |t|
      t.integer :author_id
      t.string :title, null: false
      t.index [:title]
      t.timestamps
    end
  end
end
