import React, { Component } from 'react';
import './app.scss'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home'
import Finance from './pages/Finance'
import Profile from './pages/Profile'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      sideBar: false
    }

    this.handleSidebar = this.handleSidebar.bind(this);
  }

  handleSidebar(){
    this.setState({
      sideBar : !this.state.sideBar
    });
  }

  render(){
    return(
      <div>
        <Router>
        <header className="header">
            <nav>
              <ul
                className="mainNav"
                style={this.state.sideBar ? { transform: "translateX(0)" } : null}
                >
                <li>
                  <a href="/">HOME</a>
                </li>
                <li>
                  <a href="/finance">FINANCE</a>
                </li>
                <li>
                  <a href="/profile">PROFILE</a>
                </li>
              </ul>
            </nav>
            <button
              onClick = {this.handleSidebar}
              className={`navToggle ${this.state.sideBar ? "open" : null}`}>
              <span/><span/><span/>
            </button>
            <div
              onClick={this.handleSidebar.bind(this)}
              className={`overlay ${this.state.sideBar ? "open" : ""}`}
              />
        </header>
          <Route exact path="/" component={Home} />
          <Route path="/finance" component={Finance} />
          <Route path="/profile" component={Profile} />

        </Router>
      </div>

    );
  }

}
