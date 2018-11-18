json.array! @songs do |song|
  json.extract! song, :id, :title, :album_id
  json.trackUrl url_for(song.track)
end
