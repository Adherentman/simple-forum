const AddTodo = text => dispatch => {
  dispatch({
    type: 'ADD_TODO',
    text: ['nihao', 'hello', 'woqu'],
  });
};



export const bookActions= {
  AddTodo,
};
