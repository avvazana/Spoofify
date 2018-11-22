json.songs do
  @albums.songs.each do |song|
    json.set! song.id do
      json.extract! song, :id, :title
      json.trackUrl url_for(song.track)
    end
  end
end

json.artist do
  json.extract! @artist, :id, :name, :song_ids
  json.photoUrl url_for(artist.photo);
end
