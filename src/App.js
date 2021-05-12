import React, { Component } from 'react';
import './App.css';
import CategoryButton from './category-button'
import InputField from './input-field';
import axios from 'axios';

function weirdString(val) {
  if (typeof val !== "string") {
      return true
  }
  
  let weirdChars = /^[A-Za-z0-9\-\_]+/
  if (!val.match(weirdChars)) {
      return true
  }

  let validChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-@."
  for (let i = 0; i < val.length; i++) {
      if (!validChars.includes(val[i])) {
          return true
      }
  }

  return false
}

class App extends Component {
  constructor(props) {
    super(props)
    this.categories = ['Dad', 'Random', 'Ron Swanson','User Added Jokes', 'This button makes ME laugh']
    this.state = {
      currCategory : null,
      currJoke: "",
      userJokes: [],
    }
  }
 
  getCategories() {
    return this.categories.map((dog, i) => {
      let color = 'rgb(55, 100, 206)'
      if (this.state.currCategory === dog) {
        color = '#e59244'
      }
      return (<li key={dog}>
        <CategoryButton label={dog} style={{backgroundColor: color}} onClick={(e) => {
              console.log("Setting cur category to: ")
              console.log(dog)
              this.setState({ currCategory: dog })
              this.state.currCategory = dog;
              console.log(this.state.currCategory)
              this.getJoke()
            }
          } 
        />
      </li>)
    })
  }

  getJoke() {
    console.log(this.state.currCategory)
    let dog = this.state.currCategory
    if (dog === 'Dad') {
      this.dadJoke()
    } else if (dog === 'Random') {
      this.randomJoke()
    }  else if (dog === 'Ron Swanson'){
      this.ronSwansonJoke()
    }  else if (dog === 'User Added Jokes') {
      this.userJoke()
    } 
  }

  dadJoke() {
    let url = 'https://icanhazdadjoke.com/'
    fetch(url, {headers: {'Accept': 'application/json'}})
        .then(res => {
            console.log(res)
            return res.json()
        }).then(
            (result) => { 
                console.log(result)
                console.log(result.joke)
                this.setState({currJoke: result.joke})
            }
        ).catch((err) => { console.log(err.message) })
  }

  randomJoke() {
    let url = 'https://official-joke-api.appspot.com/random_joke'
    fetch(url)
        .then(res => {
            console.log(res)
            return res.json()
        }).then(
            (result) => { 
                console.log(result)
                let joke = result.setup + ' ' + result.punchline
                console.log(joke)
                this.setState({currJoke: joke})
            }
        ).catch((err) => { console.log(err.message) })
  }

  ronSwansonJoke() {
    let url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes'
    fetch(url)
        .then(res => {
            console.log(res)
            return res.json()
        }).then(
            (result) => { 
                console.log(result)
                let joke = result
                console.log(joke)
                this.setState({currJoke: joke})
            }
        ).catch((err) => { console.log(err.message) })
  }

  userJoke() {
    let l = this.state.userJokes.length
    let i = Math.floor(Math.random()*l)
    this.setState({currJoke: this.state.userJokes[i]})
  }

  addJoke(joke) {
    if (!weirdString(joke)) {
      this.state.userJokes.push(joke)
      console.log(this.state.userJokes)
    }
  }

  render() {
    
    return (
      <div className="App">
        <h1> "I regret nothing, THE END." </h1>
        {/* <p>C'mon... click something!</p> */}
        <div className="Img">
          <img src = "https://i.imgflip.com/4/2dhps5.jpg" alt="Stickman">

          </img>
        </div>
        <h2>{this.state.currJoke}</h2>
        <ul className = "categoryList">
          {this.getCategories()}
        </ul>

        <p> Add your own joke below, gets added to User jokes! </p>
        <InputField addJoke={(joke) => this.addJoke(joke)} />
      
      </div>
    );
  }
}

export default App;

// /*!
//  * Emoji Cursor.js
//  * - 90's cursors collection
//  * -- https://github.com/tholman/90s-cursor-effects
//  * -- https://codepen.io/tholman/full/rxJpdQ
//  */

// (function emojiCursor() {
  
//   var possibleEmoji = ["😀", "😂", "😆", "😊"]
//   var width = window.innerWidth;
//   var height = window.innerHeight;
//   var cursor = {x: width/2, y: width/2};
//   var particles = [];
  
//   function init() {
//     bindEvents();
//     loop();
//   }
  
//   // Bind events that are needed
//   function bindEvents() {
//     document.addEventListener('mousemove', onMouseMove);
//     document.addEventListener('touchmove', onTouchMove);
//     document.addEventListener('touchstart', onTouchMove);
    
//     window.addEventListener('resize', onWindowResize);
//   }
  
//   function onWindowResize(e) {
//     width = window.innerWidth;
//     height = window.innerHeight;
//   }
  
//   function onTouchMove(e) {
//     if( e.touches.length > 0 ) {
//       for( var i = 0; i < e.touches.length; i++ ) {
//         addParticle( e.touches[i].clientX, e.touches[i].clientY, possibleEmoji[Math.floor(Math.random()*possibleEmoji.length)]);
//       }
//     }
//   }
  
//   function onMouseMove(e) {    
//     cursor.x = e.clientX;
//     cursor.y = e.clientY;
    
//     addParticle( cursor.x, cursor.y, possibleEmoji[Math.floor(Math.random()*possibleEmoji.length)]);
//   }
  
//   function addParticle(x, y, character) {
//     var particle = new Particle();
//     particle.init(x, y, character);
//     particles.push(particle);
//   }
  
//   function updateParticles() {
    
//     // Updated
//     for( var i = 0; i < particles.length; i++ ) {
//       particles[i].update();
//     }
    
//     // Remove dead particles
//     for( var i = particles.length -1; i >= 0; i-- ) {
//       if( particles[i].lifeSpan < 0 ) {
//         particles[i].die();
//         particles.splice(i, 1);
//       }
//     }
    
//   }
  
//   function loop() {
//     requestAnimationFrame(loop);
//     updateParticles();
//   }
  
//   /**
//    * Particles
//    */
  
//   function Particle() {

//     this.lifeSpan = 120; //ms
//     this.initialStyles ={
//       "position": "absolute",
//       "display": "block",
//       "pointerEvents": "none",
//       "z-index": "10000000",
//       "fontSize": "16px",
//       "will-change": "transform"
//     };

//     // Init, and set properties
//     this.init = function(x, y, character) {

//       this.velocity = {
//         x:  (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 2),
//         y: 1
//       };
      
//       this.position = {x: x - 0, y: y - 0};

//       this.element = document.createElement('span');
//       this.element.innerHTML = character;
//       applyProperties(this.element, this.initialStyles);
//       this.update();
      
//       document.body.appendChild(this.element);
//     };
    
//     this.update = function() {
//       this.position.x += this.velocity.x;
//       this.position.y += this.velocity.y;
//       this.lifeSpan--;
      
//       this.element.style.transform = "translate3d(" + this.position.x + "px," + this.position.y + "px,0) scale(" + (this.lifeSpan / 120) + ")";
//     }
    
//     this.die = function() {
//       this.element.parentNode.removeChild(this.element);
//     }
    
//   }
  
//   /**
//    * Utils
//    */
  
//   // Applies css `properties` to an element.
//   function applyProperties( target, properties ) {
//     for( var key in properties ) {
//       target.style[ key ] = properties[ key ];
//     }
//   }
  
//   init();
// })();

// export default App;