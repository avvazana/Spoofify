@artists.each do |artist|
  json.set! artist.id do
    json.extract! artist, :id, :name, :song_ids
    json.photoUrl url_for(artist.photo);
  end
end
