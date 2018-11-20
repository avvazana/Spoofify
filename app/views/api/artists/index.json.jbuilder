json.array! @artists do |artist|
  json.extract! artist, :id, :name
  json.photoUrl url_for(artist.photo)
end
