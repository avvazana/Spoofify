class CreateSongArtists < ActiveRecord::Migration[5.2]
  def change
    create_table :song_artists do |t|
      t.integer :song_id
      t.integer :artist_id, null: false
      t.timestamps
      t.index [:artist_id, :song_id]
    end
  end
end
