import React from 'react';
import '../style.scss';
import Cards from '../components/Card';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Cards />
      </div>
    );
  }
}