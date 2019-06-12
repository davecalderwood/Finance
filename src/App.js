import React, { Component } from 'react';
import './app.scss'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './pages/Home'
import Finance from './pages/Finance'
import Header from './components/Header'
import Footer from './components/Footer'

export default class App extends Component {
  constructor() {
    super();
    
    // Initial state
    this.state = { open: false };
    
  }

  toggle() {
    this.setState({
      open: !this.state.open
    });
  }
    render() {
        return(
          <div className="App">
          <Header />
          <Footer />
        <div className="mainApp">
          <Router>
            <div className="links">
              <Link to="/">
                    <div className="home">
                        <h3>Home</h3>
                    </div>
                  </Link>
    
                <Link to="/finance">
                  <div className="finance">
                    <h3>Finance</h3>
                  </div>
                </Link>
              </div>
    
              <div className="routes">
                <Route exact path="/" component={Home} />
                <Route path="/finance" component={Finance} />
              </div>
            </Router>
          </div>
        </div>          
        );
    }
}