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
Follow.destroy_all
SongPlaylist.destroy_all
SongArtist.destroy_all

# file = EzDownload.open('https://s3.amazonaws.com/spoofify-dev/face.jpg')

def create_user(params, filename)
  user = User.new(params)
  file = EzDownload.open("https://s3.amazonaws.com/spoofify-dev/photos/#{filename}")
  user.photo.attach(io: file, filename: filename)
  user.save!
  return user
end

def create_album(params, filename)
  album = Album.new(params)
  file = EzDownload.open("https://s3.amazonaws.com/spoofify-dev/photos/#{filename}")
  album.photo.attach(io: file, filename: filename)
  album.save!
  return album
end

def create_artist(params, filename)
  artist = Artist.new(params)
  file = EzDownload.open("https://s3.amazonaws.com/spoofify-dev/photos/#{filename}")
  artist.photo.attach(io: file, filename: filename)
  artist.save!
  return artist
end

def create_song(params, filename)
  song = Song.new(params)
  file = EzDownload.open("https://s3.amazonaws.com/spoofify-dev/tracks/#{filename}")
  song.track.attach(io: file, filename: filename)
  song.save
  return song
end

spotify = create_user({username: 'Spoofify', password: 'starwars', email: 'spotify@guest.com'}, 'face.jpg')
guest = create_user({username: 'Guest', password: 'password', email: 'guest@guest.com'}, 'face.jpg')
paul = create_user({username: 'PaulTheWise', password: 'password', email: 'guest2@guest.com'}, 'PaulTheWise.jpg')
dusty = create_user({username: 'Dusty', password: 'password', email: 'guest3@guest.com'}, 'dusty.jpg')
trev = create_user({username: 'Trev', password: 'password', email: 'guest4@guest.com'}, 'Trev.jpg')
mafe = create_user({username: 'Mafe', password: 'password', email: 'guest5@guest.com'}, 'Mafe.jpg')
keith = create_user({username: 'Keith', password: 'password', email: 'guest6@guest.com'}, 'Keith.jpg')
nathan = create_user({username: 'Nathan', password: 'password', email: 'guest7@guest.com'}, 'Nathan.jpg')
hobbes = create_user({username: 'Hobbes', password: 'password', email: 'guest8@guest.com'}, 'face.jpg')
unique = create_user({username: 'SomeCleverUsername', password: 'password', email: 'guest9@guest.com'}, 'face.jpg')
william = create_user({username: 'WillTheGod', password: 'password', email: 'guest10@guest.com'}, 'Williamnot.jpg')
paul2 = create_user({username: 'PaulAKACalvin', password: 'password', email: 'guest11@guest.com'}, 'PaulAsCalvin.jpg')

bytheway = create_album({title: 'By the Way'}, 'chilipeppers.jpg')
monday = create_album({title: 'Monday'}, 'corby.jpg')
hands = create_album({title: 'Hands'}, 'cat.jpeg')
wave = create_album({title: 'Surf'}, 'wave.jpg')
sunshine = create_album({title: 'Sunshine'}, 'matisyahu.jpg')
jelly = create_album({title: 'Keep Swimming'}, 'penguin.jpeg')
evergreen = create_album({title: 'Evergreen'}, 'bird.jpeg')
demons = create_album({title: 'Demons'}, 'splash6.jpg')
light = create_album({title: 'Light'}, 'splash5.jpg')
lift = create_album({title: 'Lift'}, 'splash4.jpg')
come = create_album({title: 'Come together'}, 'splash3.jpg')
explore = create_album({title: 'Explore'}, 'splash2.jpg')
mindless = create_album({title: 'Mindless'}, 'splash.jpg')

chilipeppers = create_artist({  name: 'Red Hot Chili Peppers'}, 'artist_chilipeppers.jpg')
mattcorby = create_artist({  name: 'Matt Corby'}, 'artist_mattcorby.jpg')
sammhenshaw = create_artist({  name: 'Samm Henshaw'}, 'artist_sammhenshaw.jpg')
instrumentals = create_artist({  name: 'Intrumentals'}, 'lowqualpic.jpeg')
matisyahu = create_artist({  name: 'Matisyahu'}, 'artist_matisyahu.jpg')
yebba = create_artist({  name: 'Yebba' }, 'artist_yebba.jpg')
gambino = create_artist({  name: 'Childish Gambino'}, 'artist_gambino.jpg')
dragons = create_artist({  name: 'Imagine Dragons'}, 'artist_dragons.jpg')
classical = create_artist({  name: 'Classics'}, 'lowqualguitar.jpeg')

alexboye = create_artist({name: 'Alex Boye'}, 'artist_alex_boye.jpg')
altj = create_artist({ name:'Alt J'}, 'artist_altj.jpg')
arctic = create_artist({name: 'Arctic Monkeys'}, 'artist_arctic_monkeys.jpg')
samsmith = create_artist({ name:'Sam Smith'}, 'artist_sam_smith.jpg')
beyonce = create_artist({name: 'Beyonce'}, 'artist_beyonce.jpeg')
jackjohnson = create_artist({name: 'Jack Johnson'}, 'artist_jack_johnson.jpg')

love = create_album({title: 'Everything is Love'}, 'roses.jpeg')
am = create_album({title: 'AM'}, 'arctic_monkeys.jpg')
space = create_album({title: 'Taro'}, 'space.jpeg')
same = create_album({title: 'All the Same'}, 'tree.jpeg')
dreams = create_album({title: 'In Between Dreams'}, 'beachspectrum.jpeg')
nirvana = create_album({title: 'Nirvana'}, 'watersky.jpeg')


s1 = create_song({title: 'Beethoven\'s Secret', album_id: same.id}, 'Alex_Boye_Beethoven.mp3')
s2 = create_song({title: 'Lord of the Rings', album_id: same.id}, 'Alex_Boye_The__Piano__Guys____Lord__of__the__Rings____.mp3')
s3 = create_song({title: 'Christmas Time', album_id: same.id}, 'Alex__Boye____Christmas__Time__Is__Here____.mp3')
s4 = create_song({title: 'Paradise', album_id: same.id}, 'Alex__Boye____Peponi__(Paradise)____.mp3')
s5 = create_song({title: 'Let it Go', album_id: same.id}, 'Alex__Boye______Let__It__Go____.mp3')
s6 = create_song({title: 'Over the Rainbow', album_id: same.id}, 'Alex_Boye_The__Piano__Guys____Over__the__Rainbow_____Simple__Gifts____.mp3')

alexboye.songs += [s1, s2, s3, s4, s5, s6]

s7 = create_song({title: 'Intro', album_id: space.id}, 'alt-J-Intro.mp3')
s8 = create_song({title: 'Fitzpleasure', album_id: space.id}, 'alt-J-Fitzpleasure.mp3')
s9 = create_song({title: 'Matilda', album_id: space.id}, 'alt-J-Matilda.mp3')
s10 = create_song({title: 'Taro', album_id: space.id}, 'alt-J-Taro.mp3')
s11 = create_song({title: 'Tessellate', album_id: space.id}, 'alt-J-Tessellate.mp3')

altj.songs += [s7, s8, s9, s10, s11]

s12 = create_song({title: 'Arabella', album_id: am.id}, 'Arctic-MonkeysDo-I-Wanna-Know.mp3')
s13 = create_song({title: 'Do I Wanna Know', album_id: am.id}, 'Arctic-MonkeysArabella.mp3')
s14 = create_song({title: 'Fluorescent Adolescent', album_id: am.id}, 'Arctic-MonkeysFluorescent-Adolescent.mp3')
s15 = create_song({title: 'R U Mine', album_id: am.id}, 'Arctic-MonkeysR-U-Mine.mp3')
s16 = create_song({title: 'Why\'d you only call me when you\'re high?', album_id: am.id}, 'Arctic-MonkeysWhyd.mp3')

arctic.songs += [s12, s13, s14, s15, s16]

s17 = create_song({title: 'Halo', album_id: love.id}, 'Beyonce-Halo.mp3')
s18 = create_song({title: 'Crazy in Love', album_id: love.id}, 'Beyonce_Crazy_In_Love.mp3')
s19 = create_song({title: 'If I Were a Boy', album_id: love.id}, 'Beyonce_If_I_Were_a_Boy.mp3')
s20 = create_song({title: 'Beautiful Liar', album_id: love.id}, 'Beyonce_Shakira_Beautiful_Liar_.mp3')

beyonce.songs += [s17, s18, s19, s20]

s21 = create_song({title: 'Banana Pancakes', album_id: dreams.id}, 'Jack_Johnson__Banana_Pancakes_.mp3')
s22 = create_song({title: 'Bubble Toes', album_id: dreams.id}, 'Jack_Johnson__Bubble_Toes_.mp3')
s23 = create_song({title: 'Flake', album_id: dreams.id}, 'Jack_Johnson__Flake_.mp3')
s24 = create_song({title: 'Fortunate Fool', album_id: dreams.id}, 'Jack_Johnson__Fortunate_Fool_.mp3')
s25 = create_song({title: 'Go On', album_id: dreams.id}, 'Jack_Johnson__Go_On_.mp3')
s26 = create_song({title: 'Good People', album_id: dreams.id}, 'Jack_Johnson__Good_People_.mp3')
s27 = create_song({title: 'Imagine', album_id: dreams.id}, 'Jack_Johnson__Imagine_.mp3')
s28 = create_song({title: 'Inaudible Melodies', album_id: dreams.id}, 'Jack_Johnson__Inaudbile_Melodies_.mp3')
s29 = create_song({title: 'Sitting, Waiting, Wishing', album_id: dreams.id}, 'Jack_Johnson__Sitting,_Waiting,_Wishing_.mp3')
s30 = create_song({title: 'Upside Down', album_id: dreams.id}, 'Jack_Johnson__Upside_Down_.mp3')

jackjohnson.songs += [s21, s22, s23, s24, s25, s26, s27, s28, s29, s30]

s31 = create_song({title: 'I\'m Not The Only One', album_id: nirvana.id}, 'Sam_Smith__I\'m_Not_The_Only_One_.mp3')
s32 = create_song({title: 'I\'ve Told You Now', album_id: nirvana.id}, 'Sam_Smith__I\'ve_Told_You_Now.mp3')
s33 = create_song({title: 'Latch', album_id: nirvana.id}, 'Sam_Smith__Latch.mp3')
s34 = create_song({title: 'Lay Me Down', album_id: nirvana.id}, 'Sam_Smith__Lay_Me_Down_.mp3')
s35 = create_song({title: 'Like I Can', album_id: nirvana.id}, 'Sam_Smith__Like_I_Can_.mp3')
s36 = create_song({title: 'Nirvana', album_id: nirvana.id}, 'Sam_Smith__Nirvana_.mp3')
s37 = create_song({title: 'Stay With Me', album_id: nirvana.id}, 'Sam_Smith__Stay_With_Me_.mp3')
s38 = create_song({title: 'Too Good At Goodbyes', album_id: nirvana.id}, 'Sam_Smith__Too_Good_At_Goodbyes.mp3')
s39 = create_song({title: 'No Peace', album_id: nirvana.id}, 'Sam_Smith_feat._YEBBA__No_Peace_.mp3')

samsmith.songs += [s31, s32, s33, s34, s35, s36, s37, s38, s39]

www = create_song({title: 'Californication', album_id: bytheway.id}, 'Californication.mp3')
zzz = create_song({title: 'Snow', album_id: bytheway.id}, 'Snow.mp3')
a = create_song({title: 'Scar Tissue', album_id: bytheway.id}, 'Scar+Tissue.mp3')
b = create_song({title: 'Around The World', album_id: bytheway.id}, 'Around+The+World.mp3')
c = create_song({title: 'Under The Bridge', album_id: bytheway.id}, 'Under+The+Bridge.mp3')
d = create_song({title: 'Otherside', album_id: bytheway.id}, 'Otherside.mp3')

chilipeppers.songs += [a, b, c, d, zzz, www]

e = create_song({title: 'Monday', album_id: monday.id}, 'Monday.mp3')
f = create_song({title: 'Brother', album_id: monday.id}, 'Brother.mp3')
g = create_song({title: 'Trick of the Light', album_id: monday.id}, 'Matt+Corby+-+Trick+of+the+Light.mp3')
h = create_song({title: 'Wrong Man', album_id: monday.id}, 'Matt+Corby+-+Wrong+Man.mp3')
i = create_song({title: 'Knife Edge', album_id: monday.id}, 'Matt+Corby+-+Knife+Edge.mp3')
j = create_song({title: 'Resolution', album_id: monday.id}, 'Matt+Corby+-+Resolution.mp3')

mattcorby.songs += [e, f, g, h, i, j]

k = create_song({title: 'These Hands', album_id: hands.id}, 'These+Hands.mp3')
l = create_song({title: 'Better', album_id: hands.id}, 'Better.mp3')

sammhenshaw.songs += [k, l]

m = create_song({title: 'Bolt', album_id: wave.id}, 'Bolt.mp3')
instrumentals.songs += [m]

q = create_song({title: 'Warrior', album_id: sunshine.id}, 'Matisyahu+-+Warrior.mp3')
r = create_song({title: 'Time Of Your Song', album_id: sunshine.id}, 'Matisyahu+-+Time+Of+Your+Song.mp3')
s = create_song({title: 'King Without a Crown', album_id: sunshine.id}, 'Matisyahu+-+King+Without+a+Crown.mp3')

matisyahu.songs += [q, r, s]

t = create_song({title: 'Evergreen', album_id: evergreen.id}, 'YEBBA.mp3')
u = create_song({title: 'My Mind (live)', album_id: evergreen.id}, 'My+Mind+(live).mp3')

v = create_song({title: 'Weak (cover)', album_id: jelly.id}, 'Weak+(cover).mp3')
w = create_song({title: 'Yebba No Peace', album_id: jelly.id}, 'No+Peace.mp3')
x = create_song({title: 'Why My Day Will Come', album_id: jelly.id}, 'Why+My+Day+Will+Come.mp3')

yebba.songs += [t, u]

y = create_song({title: 'Demons', album_id: demons.id}, 'Demons.mp3')
z = create_song({title: 'Amsterdam', album_id: demons.id}, 'Amsterdam.mp3')
aa = create_song({title: 'On Top Of The World', album_id: demons.id}, 'On+Top+Of+The+World.mp3')
bb = create_song({title: 'Thunder', album_id: demons.id}, 'Thunder.mp3')
cc = create_song({title: 'Natural', album_id: demons.id}, 'Natural.mp3')
dd = create_song({title: 'Believer', album_id: demons.id}, 'Believer.mp3')

dragons.songs += [y, z, aa, bb, cc, dd]

ee = create_song({title: 'Instrumental Joy', album_id: light.id}, 'Instrumental1.mp3')
ff = create_song({title: 'Instrumental Pleasure', album_id: light.id}, 'Instrumental2.mp3')
gg = create_song({title: 'Instrumental Fun', album_id: light.id}, 'Instrumental3.mp3')
hh = create_song({title: 'Instrumental Desire', album_id: light.id}, 'Instrumental4.mp3')
ii = create_song({title: 'Instrumental Fire', album_id: light.id}, 'Instrumental5.mp3')
jj = create_song({title: 'Instrumental Dive', album_id: light.id}, 'Instrumental6.mp3')
kk = create_song({title: 'Instrumental Words', album_id: light.id}, 'Instrumental7.mp3')

instrumentals.songs += [ee, ff, gg, hh, ii, jj, kk]

ll = create_song({title: 'Zombies', album_id: lift.id}, 'Zombies.mp3')
mm = create_song({title: 'Summertime Magic', album_id: lift.id}, 'Summertime+Magic.mp3')
nn = create_song({title: 'Sober', album_id: lift.id}, 'Sober.mp3')
oo = create_song({title: 'Sweatpants', album_id: lift.id}, 'IV.+Sweatpants.mp3')
pp = create_song({title: 'This Is America', album_id: lift.id}, 'This+Is+America.mp3')
qq = create_song({title: 'Feels Like Summer', album_id: lift.id}, 'Feels+Like+Summer.mp3')
rr = create_song({title: 'Redbone', album_id: lift.id}, 'Redbone.mp3')

gambino.songs += [ll, mm, nn, oo, pp, qq, rr]

ss = create_song({title: 'Original classic', album_id: come.id}, 'Sounds+of+Nature1.mp3')
tt = create_song({title: 'Unoriginal classic', album_id: come.id}, 'Sounds+of+Nature2.mp3')
uu = create_song({title: 'Classically classic', album_id: come.id}, 'Sounds+of+Nature3.mp3')
vv = create_song({title: 'Classically original', album_id: come.id}, 'Sounds+of+Nature4.mp3')

ww = create_song({title: 'Gift of Nature', album_id: explore.id}, 'Sounds+of+Nature5.mp3')
xx = create_song({title: 'Gift of Life', album_id: explore.id}, 'Sounds+of+Nature6.mp3')

yy = create_song({title: 'Classical Tune', album_id: mindless.id}, 'classical1.mp3')
zz = create_song({title: 'Crossroads', album_id: mindless.id}, 'classical2.mp3')
aaa = create_song({title: 'Choices', album_id: mindless.id}, 'classical3.mp3')
bbb = create_song({title: 'Change', album_id: mindless.id}, 'classical5.mp3')
ccc = create_song({title: 'Time', album_id: mindless.id}, 'classical6.mp3')

classical.songs += [ss, tt, uu, vv, ww, xx, yy, zz, aaa, bbb, ccc]

qqq = Playlist.create(title: 'Running in Circles', author_id: spotify.id)
rrr = Playlist.create(title: 'Staring at a Wall', author_id: spotify.id)
sss = Playlist.create(title: 'Unicycling', author_id: spotify.id)
ttt = Playlist.create(title: 'Abstract Algebra', author_id: spotify.id)
uuu = Playlist.create(title: 'Fully Focused', author_id: paul.id)
vvv = Playlist.create(title: 'Master of Mischief', author_id: paul2.id)
ppp = Playlist.create(title: 'Knitting Party', author_id: guest.id)
a1 = Playlist.create(title: 'Hannukah Hipster', author_id: guest.id)
a2 = Playlist.create(title: 'Danza!', author_id: mafe.id)
a3 = Playlist.create(title: 'Freedom of Will', author_id: william.id)
a4 = Playlist.create(title: 'Stocks n Socks', author_id: trev.id)
a5 = Playlist.create(title: 'Cloning an App', author_id: spotify.id)
a6 = Playlist.create(title: 'Making Portals', author_id: dusty.id)
a7 = Playlist.create(title: 'Indie', author_id: guest.id)
a8 = Playlist.create(title: 'Doing Stuff', author_id: unique.id)
a9 = Playlist.create(title: 'Fast Walking', author_id: nathan.id)
a10 = Playlist.create(title: 'Melofy', author_id: keith.id)
a11 = Playlist.create(title: 'It\'s a Magical World', author_id: hobbes.id)

qqq.songs += [www, ss, h, t, x, y, z]
ppp.songs += [k, l, q, ff, gg, hh]
a5.songs += [t, r, s ]
rrr.songs += [q, s1, c, dd, ee, ff ]
sss.songs += [m, j, s9, l]
ttt.songs += [ll, s13, z, aaa, bbb, ccc]
uuu.songs += [s21, s31, s1, dd, ee, ff, gg, hh]
vvv.songs += [ee, rr, s8, tt, uu ]
a1.songs += [t, jj, kk, ll]
a2.songs += [ss, s13, xx, rr, tt]
a3.songs += [ww, s32, s18, pp]
a4.songs += [e, s13, zzz, www]
a6.songs += [www, f, g, dd, ee, ff]
a7.songs += [yy, e, u, v, w]
a8.songs += [q, s20, s25, hh]
a9.songs += [m, bbb, ccc]
a10.songs += [ss, tt, uu]
a11.songs += [t, gg, hh]

#
# # a = Song.create!(album_id: 2, title: "Californication")
# # b = Song.create!(album_id: 2, title: "Snow")
# # c = Song.create!(album_id: 3, title: "Monday")
# # d = Song.create!(album_id: 4, title: "King Without a Crown")
# # e = Song.create!(album_id: 5, title: "Redbone")
# # f = Song.create!(album_id: 6, title: "Evergreen")
# # g = Song.create!(album_id: 7, title: "Corporate Innovation")
# # h = Song.create!(album_id: 7, title: "Corporate Presentation")
# # i = Song.create!(album_id: 7, title: "Corporate Success")
# # j = Song.create!(album_id: 8, title: "Smooth")
# # k = Song.create!(album_id: 9, title: "The Battle")
#
#
# # c.track.attach(io: File.open("/Users/avichaivazana/Desktop/Songs/Monday.mp3"), filename: "Monday.mp3")
# #
# # a.track.attach(io: File.open("/Users/avichaivazana/Desktop/Songs/ Californication.mp3"), filename: "Californication.mp3")
# # b.track.attach(io: File.open("/Users/avichaivazana/Desktop/Songs/ Snow.mp3"), filename: "Snow.mp3")
# # d.track.attach(io: File.open("/Users/avichaivazana/Desktop/Songs/King Without a Crown.mp3"), filename: "King Without a Crown.mp3")
# # e.track.attach(io: File.open("/Users/avichaivazana/Desktop/Songs/Redbone.mp3"), filename: "Redbone.mp3")
# # f.track.attach(io: File.open("/Users/avichaivazana/Desktop/Songs/YEBBA.mp3"), filename: "YEBBA.mp3")
# # g.track.attach(io: File.open("/Users/avichaivazana/Desktop/Songs/Corporate_Innovative.mp3"), filename: "Corporate_Innovative.mp3")
# # h.track.attach(io: File.open("/Users/avichaivazana/Desktop/Songs/Corporate_Presentation.mp3"), filename: "Corporate_Presentation.mp3")
# # i.track.attach(io: File.open("/Users/avichaivazana/Desktop/Songs/Corporate_Success.mp3"), filename: "Corporate_Success.mp3")
# # j.track.attach(io: File.open("/Users/avichaivazana/Desktop/Songs/Smooth.mp3"), filename: "Smooth.mp3")
# # k.track.attach(io: File.open("/Users/avichaivazana/Desktop/Songs/the-battle.mp3"), filename: "the-battle.mp3")
# #
# # a = Song.second
# # b = Song.find_by(id: 14)
# # d = Song.find_by(id: 5)
# # e = Song.find_by(id: 6)
# # f = Song.find_by(id: 7)
# # g = Song.find_by(id: 8)
# # h = Song.find_by(id: 15)
# # i = Song.find_by(id: 16)
# # j = Song.find_by(id: 11)
# # k = Song.find_by(id: 12)
# #
#
# #
# #
# #
# # Playlist.create!(author_id: 22, title: "Chill Vibes")
# # Playlist.create!(author_id: 22, title: "Summer Stuff")
# # Playlist.create!(author_id: 22, title: "Sleepy Time")
# # Playlist.create!(author_id: 22, title: "Study Music")
# # Playlist.create!(author_id: 22, title: "Party")
# # Playlist.create!(author_id: 22, title: "Random Mix")
# # Playlist.create!(author_id: 22, title: "Shower")
# # Playlist.create!(author_id: 22, title: "Walking")
# # Playlist.create!(author_id: 22, title: "Shower while walking")
# #
# #
# # Song_playlist.create!(4, 3)
# Song_playlist.create!(4, 4)
# Song_playlist.create!(4, 5)
# Song_playlist.create!(5, 3)
# Song_playlist.create!(5, 4)
# Song_playlist.create!(5, 5)
# Song_playlist.create!(5, 6)
# Song_playlist.create!(6, 7)
# Song_playlist.create!(6, 8)
# Song_playlist.create!(6, 9)
# Song_playlist.create!(6, 10)
# Song_playlist.create!(7, 5)
# Song_playlist.create!(7, 3)
# Song_playlist.create!(7, 7)
# Song_playlist.create!(7, 4)
# Song_playlist.create!(8, 4)
# Song_playlist.create!(8, 5)
# Song_playlist.create!(11, 5)
# Song_playlist.create!(11, 7)
# Song_playlist.create!(11, 4)
# Song_playlist.create!(11, 3)
# Song_playlist.create!(12, 8)
# Song_playlist.create!(12, 7)
# Song_playlist.create!(15, 9)
# Song_playlist.create!(16, 10)
# Song_playlist.create!(14, 4)
# Song_playlist.create!(2, 3)
#
#
#



# l = Album.create!(title: "Chilis")
# m = Album.create!(title: "Corbys")
# n = Album.create!(title: "Samms")
# o = Album.create!(title: "Vibes")
# q = Album.create!(title: "Redemption")
# r = Album.create!(title: "Epic")
# s = Album.create!(title: "Yebbz")
# t = Album.create!(title: "Gambining")
# u = Album.create!(title: "Dragons")
#
# l.photo.attach(io: File.open("/Users/avichaivazana/Desktop/Photos/chilipeppers.jpg"), filename: "chilipeppers.jpg")
# m.photo.attach(io: File.open("/Users/avichaivazana/Desktop/Photos/corby.jpg"), filename: "corby.jpg")
# n.photo.attach(io: File.open("/Users/avichaivazana/Desktop/Photos/samm.jpg"), filename: "samm.jpg")
# o.photo.attach(io: File.open("/Users/avichaivazana/Desktop/Photos/Wave.jpg"), filename: "Wave.jpg")
# q.photo.attach(io: File.open("/Users/avichaivazana/Desktop/Photos/matisyahu.jpg"), filename: "matisyahu.jpg")
# r.photo.attach(io: File.open("/Users/avichaivazana/Desktop/Photos/whirl.jpg"), filename: "whirl.jpg")
# s.photo.attach(io: File.open("/Users/avichaivazana/Desktop/Photos/yebba.jpg"), filename: "yebba.jpg")
# t.photo.attach(io: File.open("/Users/avichaivazana/Desktop/Photos/gambino.jpg"), filename: "gambino.jpg")
# u.photo.attach(io: File.open("/Users/avichaivazana/Desktop/Photos/face.jpg"), filename: "face.jpg")
