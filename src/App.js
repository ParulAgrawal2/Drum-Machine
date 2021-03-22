import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

const drumBox = [
  {
    key: 'Q',
    keyplay: 'playq',
    sound: "http://codeskulptor-demos.commondatastorage.googleapis.com/descent/gotitem.mp3"
  },
  
  {
    key: 'W',
    keyplay: 'playw',
    sound: "http://codeskulptor-demos.commondatastorage.googleapis.com/descent/Zombie.mp3"
  },
  
  {
    key: 'E',
    keyplay: 'playe',
    sound: "http://codeskulptor-demos.commondatastorage.googleapis.com/descent/Crumble%20Sound.mp3"
  },
  
  {
    key: 'A',
    keyplay: 'playa',
    sound: "http://codeskulptor-demos.commondatastorage.googleapis.com/descent/spring.mp3"
  },
  
  {
    key: 'S',
    keyplay: 'plays',
    sound: "http://commondatastorage.googleapis.com/codeskulptor-assets/sounddogs/explosion.mp3"
  },
  
  {
    key: 'D',
    keyplay: 'playd',
    sound: "http://commondatastorage.googleapis.com/codeskulptor-assets/sounddogs/missile.mp3"
  },
  
  {
    key: 'Z',
    keyplay: 'playz',
    sound: "http://codeskulptor-demos.commondatastorage.googleapis.com/pang/arrow.mp3"
  },
  
  {
    key: 'X',
    keyplay: 'playx',
    sound: "http://codeskulptor-demos.commondatastorage.googleapis.com/pang/pop.mp3"
  },
  
  {
    key: 'C',
    keyplay: 'playc',
    sound: "http://codeskulptor-demos.commondatastorage.googleapis.com/descent/bomb.mp3"
  }
  
] 




class App extends React.Component {
  constructor(props){
    super(props);
    this.audio = React.createRef()
    
  }
  
  playAudio = () => {
    
    this.audio.current.play()
  } 
  
 render(){
   
    
    return(
    
      <div id="drum-machine">
  
  <div id = "display" className ="container">
    
    {drumBox.map((user) => {
       return (
       <button className = "drum-pad"  id = {user.keyplay} onClick = {this.playAudio}><audio ref = {this.audio} src = {user.sound} className = "clip" id = {user.key}/>{user.key}</button>
       )
     })}
     
    </div>
  
  </div>
      
    
    )
    
    
  }
  
}


export default App;
