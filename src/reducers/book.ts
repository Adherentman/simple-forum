import * as Immutable from 'immutable';
import { AnyAction } from 'redux';

export default (state = Immutable.Map(), action: AnyAction) => {

  switch (action.type) {
    case 'ADD_TODO':
      return state.set('text', Immutable.fromJS(action.text))
    default:
      return state;
  }
}