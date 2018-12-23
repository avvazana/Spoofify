json.songs do
  @artist.songs.each do |song|
    json.set! song.id do
      json.extract! song, :id, :title
      json.trackUrl url_for(song.track)
      json.photoUrl url_for(song.album.photo)
      json.album song.album.title
    end
  end
end

json.@artist do
  json.extract! @artist, :id, :name, :song_ids
  json.photoUrl url_for(@artist.photo);
  json.album_ids @artist.albums.pluck(:id)
end
