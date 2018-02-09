import * as React from 'react';
import * as Immutable from 'immutable';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import '../style.scss';
import { bookActions, BookActions } from '../actions/bookAction';
import Cards from '../components/Card';

interface stateType {
  book: Immutable.Map<string, any>;
}

interface AppProps {
  text: Immutable.List<Immutable.Map<string, any>>;
  actions: BookActions;
}

interface AppStates {}
class App extends React.Component<AppProps, AppStates> {
  componentDidMount() {
    var actions = this.props.actions;
    actions.AddTodo();
  }
  render() {
    var text: Immutable.List<Immutable.Map<string, any>> = this.props.text;

    return (
      <div className="App">
        <Cards />
      </div>
    );
  }
}

export default connect(
  (state: stateType) => {
    return {
      text: state.book.get('text'),
    };
  },
  dispatch => ({
    actions: bindActionCreators(bookActions, dispatch),
  })
)(App);
