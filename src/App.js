import React, {Component} from 'react';
import './App.css';
import TopNavbar from './components/TopNavbar/TopNavbar';
import VideoList from './components/VideoList/VideoList';
import Login from './components/Login/Login';
import RegisterBar from './components/RegisterBar/RegisterBar';
import Register from './components/Register/Register';
import {VideosURL} from './VideoURL';
import 'tachyons';



class App extends Component  {
  constructor() {
    super()
    this.state = {
      'username': '',
      'email' : '',
      'route': 'signin'
    }
  }

  loadUserState = (data) => {
    this.setState({
      'username': data[0].username,
      'email': data[0].email,
      'route': 'home'
    })
  }

  changeRoute = (text) => {
    this.setState({
      'route': text
    })
  }
  

  render(){
    return (
    <div>
      {this.state.route === "signin" ?
      <div>
        <RegisterBar changeRoute = {this.changeRoute}/>
        <Login loadUserState={this.loadUserState} changeRoute = {this.changeRoute} />
      </div>
      : (this.state.route === 'register'? 
      <div>
        <RegisterBar changeRoute = {this.changeRoute}/>
        <Register loadUserState={this.loadUserState} changeRoute = {this.changeRoute}/>
      </div>
      :(this.state.route === 'home')?
      <div>
        <TopNavbar username = {this.state.username} email = {this.state.email}/>
        <VideoList VideoCollection={VideosURL} />
      </div>
      :   
      <div>
        <Login loadUserState={this.loadUserState}/>
      </div>
      )
  }
  </div>
    )}
}

export default App;
