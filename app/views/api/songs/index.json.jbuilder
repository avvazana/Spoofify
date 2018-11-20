@songs.each do |song|
  json.set! song.id do
    json.extract! song, :id, :title
    json.trackUrl url_for(song.track)
  end
end

# json.array! @songs do |song|
#   json.extract! song, :id, :title, :album_id
#   json.trackUrl url_for(song.track)
# end
