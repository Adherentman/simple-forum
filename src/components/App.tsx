import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { bookActions, BookActions } from '../actions/bookAction'; 
import '../style.scss';

import Cards from '../components/Card';

interface AppProps{
  text: any
  actions: BookActions
}

interface AppStates{
}
class App extends React.Component<AppProps, AppStates> {
  
  componentDidMount() {
    var actions = this.props.actions;
    actions.AddTodo()
  }
  render() {

    return (
      <div className="App">
        <Cards />
      </div>
    );
  }
}
function mapStateToProps(state: any) {
  return { text: state };
}

function mapDispatchToProps(dispatch: any) {
  return { actions: bindActionCreators(bookActions, dispatch) };
}

export default connect((state: any) =>{
  return {
    text: state.text
  };
}, (dispatch: any) => ({
  actions: bindActionCreators(bookActions, dispatch) 
}))(App);