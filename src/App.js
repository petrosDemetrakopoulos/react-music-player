import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AlbumsListPage from './Pages/AlbumsListPage'

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
          </div>
      </Router>
      </div>
  );
}

export default App;