// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
// import React from 'react';
import React, { Component } from 'react'
import NewsComponent from './components/NewsComponent';
// import NewsItem from './components/NewsItem';

export default class App extends Component {
  render() {
    return (
      <div>
         <Navbar/>
         <NewsComponent/>
  
      </div>
    )
  }
}



