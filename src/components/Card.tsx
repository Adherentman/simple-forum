import * as React from 'react';
import { Card } from 'antd';
import * as Immutable from 'immutable';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { bookActions, BookActions } from '../actions/bookAction';

const { Meta } = Card;
const cardStyle = {
  width: '400px',
  margin: '0 auto',
};
const gridStyle = {
  width: '300px',
};

interface CardsProps {
  text: Immutable.List<Immutable.Map<string, any>>;
  actions: BookActions;
}
interface stateType {
  book: Immutable.Map<string, any>;
}
interface CardsState {}
// http://pic2.zhimg.com/50/f9e31e4f02fb06e20ba031ab1e351d55_hd.jpg
class Cards extends React.Component<CardsProps, CardsState> {
  componentDidMount() {
    var actions = this.props.actions;
    actions.AddTodo();
  }
  render() {
    var text: Immutable.List<Immutable.Map<string, any>> = this.props.text;

    return (
      <div style={cardStyle}>
        <Card
          hoverable
          cover={<img alt="example" src={require('../assets/images/pi.jpg')} />}
          style={gridStyle}
        >
          <Meta
            title="Thank you for using!"
            description="if you don't like ant desgin, you can use:"
          />
          <code>yarn remove antd</code>
        </Card>
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
)(Cards);
