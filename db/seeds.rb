# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Album.destroy_all
Song.destroy_all
Artist.destroy_all
User.destroy_all
Playlist.destroy_all

l = Album.create!(title: "Chilis")
m = Album.create!(title: "Corbys")
n = Album.create!(title: "Samms")
o = Album.create!(title: "Vibes")
q = Album.create!(title: "Redemption")
r = Album.create!(title: "Epic")
s = Album.create!(title: "Yebbz")
t = Album.create!(title: "Gambining")
u = Album.create!(title: "Dragons")

l.photo.attach(io: File.open("/Users/avichaivazana/Desktop/Photos/chilipeppers.jpg"), filename: "chilipeppers.jpg")
m.photo.attach(io: File.open("/Users/avichaivazana/Desktop/Photos/corby.jpg"), filename: "corby.jpg")
n.photo.attach(io: File.open("/Users/avichaivazana/Desktop/Photos/samm.jpg"), filename: "samm.jpg")
o.photo.attach(io: File.open("/Users/avichaivazana/Desktop/Photos/Wave.jpg"), filename: "Wave.jpg")
q.photo.attach(io: File.open("/Users/avichaivazana/Desktop/Photos/matisyahu.jpg"), filename: "matisyahu.jpg")
r.photo.attach(io: File.open("/Users/avichaivazana/Desktop/Photos/whirl.jpg"), filename: "whirl.jpg")
s.photo.attach(io: File.open("/Users/avichaivazana/Desktop/Photos/yebba.jpg"), filename: "yebba.jpg")
t.photo.attach(io: File.open("/Users/avichaivazana/Desktop/Photos/gambino.jpg"), filename: "gambino.jpg")
u.photo.attach(io: File.open("/Users/avichaivazana/Desktop/Photos/face.jpg"), filename: "face.jpg")

c.track.attach(io: File.open("/Users/avichaivazana/Desktop/Songs/Monday.mp3"), filename: "Monday.mp3")

a.track.attach(io: File.open("/Users/avichaivazana/Desktop/Songs/ Californication.mp3"), filename: "Californication.mp3")
b.track.attach(io: File.open("/Users/avichaivazana/Desktop/Songs/ Snow.mp3"), filename: "Snow.mp3")
d.track.attach(io: File.open("/Users/avichaivazana/Desktop/Songs/King Without a Crown.mp3"), filename: "King Without a Crown.mp3")
e.track.attach(io: File.open("/Users/avichaivazana/Desktop/Songs/Redbone.mp3"), filename: "Redbone.mp3")
f.track.attach(io: File.open("/Users/avichaivazana/Desktop/Songs/YEBBA.mp3"), filename: "YEBBA.mp3")
g.track.attach(io: File.open("/Users/avichaivazana/Desktop/Songs/Corporate_Innovative.mp3"), filename: "Corporate_Innovative.mp3")
h.track.attach(io: File.open("/Users/avichaivazana/Desktop/Songs/Corporate_Presentation.mp3"), filename: "Corporate_Presentation.mp3")
i.track.attach(io: File.open("/Users/avichaivazana/Desktop/Songs/Corporate_Success.mp3"), filename: "Corporate_Success.mp3")
j.track.attach(io: File.open("/Users/avichaivazana/Desktop/Songs/Smooth.mp3"), filename: "Smooth.mp3")
k.track.attach(io: File.open("/Users/avichaivazana/Desktop/Songs/the-battle.mp3"), filename: "the-battle.mp3")

a = Song.second
b = Song.find_by(id: 14)
d = Song.find_by(id: 5)
e = Song.find_by(id: 6)
f = Song.find_by(id: 7)
g = Song.find_by(id: 8)
h = Song.find_by(id: 15)
i = Song.find_by(id: 16)
j = Song.find_by(id: 11)
k = Song.find_by(id: 12)

a = Song.create!(album_id: 2, title: "Californication")
b = Song.create!(album_id: 2, title: "Snow")
c = Song.create!(album_id: 3, title: "Monday")
d = Song.create!(album_id: 4, title: "King Without a Crown")
e = Song.create!(album_id: 5, title: "Redbone")
f = Song.create!(album_id: 6, title: "Evergreen")
g = Song.create!(album_id: 7, title: "Corporate Innovation")
h = Song.create!(album_id: 7, title: "Corporate Presentation")
i = Song.create!(album_id: 7, title: "Corporate Success")
j = Song.create!(album_id: 8, title: "Smooth")
k = Song.create!(album_id: 9, title: "The Battle")



Playlist.create!(author_id: 22, title: "Chill Vibes")
Playlist.create!(author_id: 22, title: "Summer Stuff")
Playlist.create!(author_id: 22, title: "Sleepy Time")
Playlist.create!(author_id: 22, title: "Study Music")
Playlist.create!(author_id: 22, title: "Party")
Playlist.create!(author_id: 22, title: "Random Mix")
Playlist.create!(author_id: 22, title: "Shower")
Playlist.create!(author_id: 22, title: "Walking")
Playlist.create!(author_id: 22, title: "Shower while walking")


Song_playlist.create!(4, 3)
Song_playlist.create!(4, 4)
Song_playlist.create!(4, 5)
Song_playlist.create!(5, 3)
Song_playlist.create!(5, 4)
Song_playlist.create!(5, 5)
Song_playlist.create!(5, 6)
Song_playlist.create!(6, 7)
Song_playlist.create!(6, 8)
Song_playlist.create!(6, 9)
Song_playlist.create!(6, 10)
Song_playlist.create!(7, 5)
Song_playlist.create!(7, 3)
Song_playlist.create!(7, 7)
Song_playlist.create!(7, 4)
Song_playlist.create!(8, 4)
Song_playlist.create!(8, 5)
Song_playlist.create!(11, 5)
Song_playlist.create!(11, 7)
Song_playlist.create!(11, 4)
Song_playlist.create!(11, 3)
Song_playlist.create!(12, 8)
Song_playlist.create!(12, 7)
Song_playlist.create!(15, 9)
Song_playlist.create!(16, 10)
Song_playlist.create!(14, 4)
Song_playlist.create!(2, 3)
