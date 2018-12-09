@albums.each do |album|
  json.set! album.id do
    json.extract! album, :id, :title, :song_ids
    json.photoUrl url_for(album.photo);
    json.artist_ids album.artists.pluck(:id)
  end
end
