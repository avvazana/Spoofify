json.songs do
  @album.songs.each do |song|
    json.set! song.id do
      json.extract! song, :id, :title
      json.trackUrl url_for(song.track)
    end
  end
end

json.album do
  json.extract! @album, :id, :title, :song_ids
  json.photoUrl url_for(@album.photo);
  json.artist_ids @album.artists.pluck(:id)
end
