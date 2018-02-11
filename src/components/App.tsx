import * as React from 'react';
import '../style.scss';
import Cards from '../components/Card';

interface AppProps {}
interface AppStates {}
export default class App extends React.Component<AppProps, AppStates> {
  render() {
    return (
      <div className="App">
        <Cards />
      </div>
    );
  }
}
