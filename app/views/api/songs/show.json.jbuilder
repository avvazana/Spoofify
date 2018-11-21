json.song do
  json.extract! song, :id, :title
  json.trackUrl url_for(song.track)
end
