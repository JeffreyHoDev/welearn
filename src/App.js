import React, {Component} from 'react';
import './App.css';
import TopNavbar from './components/TopNavbar/TopNavbar';
import VideoList from './components/VideoList/VideoList';
import {VideosURL} from './VideoURL';

class App extends Component  {
  render(){
    return (
      <div>
        <TopNavbar/>
        <VideoList VideoCollection={VideosURL} />
      </div>
    );
  }

}

export default App;
