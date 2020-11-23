import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


import Create from './components/c_create';
import Edit from './components/c_edit';
import Index from './components/c_index';
import R_index from './components/r_index';
import List from './components/r_list';



function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to={'/'} className="navbar-brand">React CRUD Example</Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <Link to={'/'} className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to={'/create'} className="nav-link">Create</Link>
              </li>
              <li className="nav-item">
                <Link to={'/index'} className="nav-link">Index</Link>
              </li>
              <li className="nav-item">
                <Link to={'/R_index'} className="nav-link">Redux</Link>
              </li>
              <li className="nav-item">
                <Link to={'/list'} className="nav-link">Reduxlist</Link>
              </li>
            </ul>
          </div>
        </nav> <br/>
        <h2>Welcome to React CRUD Tutorial</h2> <br/>
        <Switch>
            <Route exact path='/create' component={ Create } />
            <Route path='/edit/:id' component={ Edit } />
            <Route path='/index' component={ Index } />
            <Route path='/R_index' component={ R_index } />
            <Route path='/list' component={ List } />

        </Switch>
      </div>

    </Router>
  );
}

export default App;
