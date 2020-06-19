import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AlbumsListPage from './Pages/AlbumsListPage'
import AlbumDetailPage from './Pages/AlbumDetailPage'
import AudioPlayer from './Components/AudioPlayer/AudioPlayer'

function App() {
  return (
    <div>
        <Router>
          <div className="container">
          <nav className="navbar navbar-expand-lg bg-light">
            <Link to="/" className="navbar-brand bold">Music App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Albums</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Route path='/' exact component={AlbumsListPage} />
          <Route path='/album/:_id' component={AlbumDetailPage} />
          </div>
      </Router>
       <AudioPlayer />
      </div>
  );
}

export default App;