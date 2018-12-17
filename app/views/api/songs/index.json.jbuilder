
# json.playlist do
#   json.extract! @playlist, :id, :title, :song_ids, :author_id
#   json.author @playlist.author.username
# end

@songs.each do |song|
  json.set! song.id do
    json.extract! song, :id, :title, :album_id, :artist_ids
    json.album song.album.title
    json.trackUrl url_for(song.track)
    json.photoUrl url_for(song.album.photo)
  end
end
