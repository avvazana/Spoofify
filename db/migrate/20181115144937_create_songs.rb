class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.integer :album_id, null: false
      t.string :title, null: false
      t.index [:album_id], unique: true
      t.index [:title], unique: true
      t.timestamps
    end
  end
end
