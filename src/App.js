import React from 'react';
import './App.css';
import Weather from './Weather.js'
import Menu from './Menu.js'

const PLACES = [
  { name: "Palo Alto", zip: "94303" },
  { name: "San Jose", zip: "94088" },
  { name: "Santa Cruz", zip: "95062" },
  { name: "Honolulu", zip: "96803" },
  { name: "ZVL", zip: "606522" }
];

//--Главный компонент
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activePlace: 0,
    };
  }

  updateActivePlaceFunc = (value) => {
    this.setState({ activePlace: value })
  }

  render() {
    const activePlace = this.state.activePlace;
    return (
      <div className="App">
        <header><h1>React Simple Weather App</h1></header>
        <div className="container">
          <Menu updateActivePlaceFunc={this.updateActivePlaceFunc} places={PLACES} />
          <Weather key={activePlace} zip={PLACES[activePlace].zip} />
        </div>
      </div>
    );
  }
}

export default App;
