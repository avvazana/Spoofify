
@songs.each do |song|
  json.set! song.id do
    json.extract! song, :id, :title, :album_id, :artist_ids
    json.trackUrl url_for(song.track)
    json.photoUrl url_for(song.album.photo)
  end
end
