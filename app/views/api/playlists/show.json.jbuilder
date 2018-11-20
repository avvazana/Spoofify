json.songs do
  @playlist.songs.each do |song|
    json.set! song.id do
      json.extract! song, :id, :title
      json.trackUrl url_for(song.track)
    end
  end
end

json.playlist do
  json.extract! @playlist, :id, :title, :song_ids, :author_id
  if @playlist.songs[0]
    json.photoUrl url_for(@playlist.songs[0].album.photo);
  else
    json.photoUrl image_path("face.jpg")
  end
  json.author @playlist.author.username
end
