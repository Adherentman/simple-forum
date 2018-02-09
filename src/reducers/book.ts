export default (state: any = [], action: any) => {

  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.text]
    default:
      return state;
  }
}