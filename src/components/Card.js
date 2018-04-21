import React from 'react';
import { Card } from 'antd';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';
//import * as Immutable from 'immutable';
//import { bindActionCreators } from 'redux';
//import { connect } from 'react-redux';

// import { bookActions, BookActions } from '../actions/bookAction';
import Apolloex from './Apolloex';

const { Meta } = Card;
const cardStyle = {
  width: '400px',
  margin: '0 auto',
};
const gridStyle = {
  width: '300px',
};

class Cards extends React.Component {
  componentDidMount() {
    //var actions = this.props.actions;
    //actions.AddTodo();
  }
  render() {
    //var text: Immutable.List<Immutable.Map<string, any>> = this.props.text;

    return (
      <div style={cardStyle}>
        <Card
          hoverable
          cover={<img alt="example" src={require('../assets/images/pi.jpg')} />}
          style={gridStyle}
        >
          <Meta
            title="Thank you for using!!"
            description="if you don't like ant desgin, you can use:"
          />
          <code>yarn remove antd</code>
          <Apolloex/>
        </Card>
      </div>
    );
  }
}
// export default connect(
//   (state: stateType) => {
//     return {
//       text: state.book.get('text'),
//     };
//   },
//   dispatch => ({
//     actions: bindActionCreators(bookActions, dispatch),
//   })
// )(Cards);

export default Cards;