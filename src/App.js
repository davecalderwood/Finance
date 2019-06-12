import React from 'react'
import './app.scss'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './pages/Home'
import Finance from './pages/Finance'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="App">
      <Header />
      <Footer />

    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/finance" component={Finance} />

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
      </Router>
    </div>
  );
}

