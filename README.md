# Welcome to Spoofify
This is Spoofify. A Spotify-inspired full-stack application built in 10 days.

[Spoofify Live](https://avivazana.com/Spoofify/)

## The Front-End

Built using a React, Redux, and JavaScript frontend, the site renders and updates dynamically.
Modular architecture is utilized to minimize components to improve readability, reusability and scaling potential.

![alt text](https://github.com/avvazana/Spoofify/raw/master/assets/spoofifyFrontend.png)

## The Back-End

Built using a Ruby on Rails backend that communicates with a PostgreSQL database and interacts with Amazon Web Services S3 to store and retrieve assets.

## Features

### User Auth
Login and signup using BCrypt encryption with contextual error messages. Both a front-end and back-end authentication system was set up to give the users a more tailored and personal experience on the site.

### Playlist CRUD
Playlists can be created and played by any user, but songs can only be added and removed from a playlist by the user who created it. Additionally, playlists can only be deleted by the user who created it.

![alt text](https://github.com/avvazana/Spoofify/raw/master/assets/createPlaylist.png)

### Audio that plays while navigating
The audio player, a core feature for any music app, is a top-level component for this app. This allows users to stream music, change songs, and save the currently-playing song to their library while navigating the site.

![alt text](https://github.com/avvazana/Spoofify/raw/master/assets/playbar.png)

### Search and Apple Music API
The search bar allows a user to find albums, playlists, songs, and artists instantly.
An Apple Music API was implemented to give the user the ability to search a virtually infinite amount of albums and preview the songs there. 

![alt text](https://github.com/avvazana/Spoofify/raw/master/assets/search.png)


### Queueing, Skipping forward and backwards
The Redux state was constructed such that when a user selects a song a new queue list will be dynamically generated based on the list of songs in view. A user can skip to the next song in the queue, restart the current song, or return to the previous one.

### Follows
Another essential feature that was added to the app was the ability to follows artists and playlists. This allows users to save the things that they like and have it appear in their own personal library.

### Future Plans
