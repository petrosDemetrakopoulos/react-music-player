# React Music Player

## Project Overview
The project asked to develop is a simple application displaying music albums that contain tracks. 
The initial project was generated using `create-react-app` generator.
The app is able to play each track and provides some basic controls for the functionality of a very simple music player.

Each album has the following attributes:

1) Name
2) Artist
3) Cover (path to the cover image)
4) Songs (Array of song objects)

Each song has the following attributes

1) Name
2) Artist
3) Cover (path to the cover image)
4) File (path to the audio file)


## Detailed specifications

* The app should **display a list of albums**

* The app should have **a detail view** where the user **can view the details and the songs** an album contains

* The music player should be available across the app **regardless the route**

* Initially player **must not be playing anything**

* During playback **it should show the track progress and the track name**

* It should show the **Play / Pause, Next and Previous** controls

## Functionality
Except the functionality mentioned in the document, I implemented the following functionality:

* When a song ends, the next of the lbums begins

* If the song that just ended is the last song of the album, the audio player loads and plays the first one of the next album (tried to mock the Spotify functionality)

* If the song playing is the last song of the album, and user presses the Next button, the audio player loads and plays the first one of the next album (same functionality for Previous buttton too)

## Project structure
The code has the following structure

	├── README.md
	├── package-lock.json
	├── package.json
	├── public
	│   ├── favicon.ico
	│   ├── index.html
	│   ├── logo192.png
	│   ├── logo512.png
	│   ├── manifest.json
	│   └── robots.txt
	├── src
	│   ├── App.css
	│   ├── App.js
	│   ├── App.test.js
	│   ├── Components
	│   │   ├── Albums
	│   │   │   ├── AlbumCard.js
	│   │   │   └── AlbumsList.js
	│   │   ├── AudioPlayer
	│   │   │   ├── AudioPlayer.js
	│   │   │   ├── Controls
	│   │   │   │   ├── Bar.js
	│   │   │   │   ├── NextButton.js
	│   │   │   │   ├── PauseButton.js
	│   │   │   │   ├── PlayButton.js
	│   │   │   │   ├── PlaybackBar.js
	│   │   │   │   └── PreviousButton.js
	│   │   │   └── SongDetails.js
	│   │   └── Songs
	│   │       ├── SongCard.js
	│   │       └── SongsList.js
	│   ├── Context
	│   │   ├── Reducer.js
	│   │   ├── Store.js
	│   │   └── useAudioPlayer.js
	│   ├── Helpers
	│   │   ├── PlaybackController.js
	│   │   └── barHelpers.js
	│   ├── Pages
	│   │   ├── AlbumDetailPage.js
	│   │   └── AlbumsListPage.js
	│   ├── data
	│   │   └── data.json
	│   ├── index.css
	│   ├── index.js
	│   ├── serviceWorker.js
	│   └── setupTests.js
	└── yarn.lock

### Architectural choices

* I used **React hooks**  and **React Context API** for the state management. React Hooks offer an alternative to writing class-based components by allowing us to handle state management from functional components. Of course it is something we could have done with react-redux library, however React hooks seems to be the modern way of handling state in React and offers much more possibilities in a more lightweight way. 

* **Components** directory holds all the custom components we have created. All custom components are functional. I choose functional components over class based components because 
    * They are easier to read, test and maintain
    * The are more lightweight than class based components

* **Styling**: For styling I used the **Bootstrap** framework which offers many pretty components and CSS classes. In some points it was essential to write custom CSS (which I tried to do in an external CSS file and not in-line for code readability / best practices reasons)


### Mock data
`data.json` file holds the mock data that the app uses to display. 
I found both images and audio files in [archive.org](https://archive.org) and [wikimedia.org](https://wikimedia.org)

### How to run it

Type `npm install` in the root directory and wait for npm to download all the dependencies. Then type `npm start`,

Note: As previously mentioned the project was generated by `create-react-app` generator which uses `react-script`, so `react-scripts` library should be globally installed in your computer in order to run it. 
