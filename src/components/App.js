import React, { Component } from 'react';
import '../styles/App.css';
import card from '../cardData';
import Card from './Card';
import avatar from '../self.png';
import ball from '../soccer_ball.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card 
          logoURL={ball}
          headline={card.headline}
          name={card.name}
          creditImageURL={avatar}
          message={card.message}
          url={card.url}
          urlDisplayName={card.urlDisplayName}
        />
      </div>
    );
  }
}

export default App;
