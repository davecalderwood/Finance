import React from 'react'
import './app.scss'
import Home from './home/Home'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

