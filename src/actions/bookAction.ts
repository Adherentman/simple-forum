import { ActionCreator, ActionCreatorsMapObject, Dispatch } from 'redux';

const AddTodo = (text: string) => (dispatch: any) => {
  dispatch({
    type: 'ADD_TODO',
    text: ['nihao','hello','woqu']
  });
}

export class BookActions implements ActionCreatorsMapObject {
  AddTodo: ActionCreator<any>
  [key: string]: ActionCreator<any>;
}

export const bookActions = {
  AddTodo,
}