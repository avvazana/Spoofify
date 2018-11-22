@albums.each do |album|
  json.set! artist.id do
    json.extract! artist, :id, :title, :song_ids
    json.photoUrl url_for(album.photo);
  end
end
