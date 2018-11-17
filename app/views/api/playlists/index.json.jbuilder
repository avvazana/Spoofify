json.array! @playlists do |playlist|
  json.extract! playlist, :id, :title
  json.photoUrl url_for(playlist.photo)
  json.trackUrl url_for(playlist.track)
end
