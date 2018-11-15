@songs.each do |song|
  json.tracks do
    json.extract! song, :id, :title, :album_id
    json.file song.song_file
  end
end
