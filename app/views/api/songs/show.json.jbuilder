json.song do
  json.extract! song, :id, :title, :album_id, :artist_ids
  json.trackUrl url_for(song.track)
end
