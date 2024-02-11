const initialState = {
    mycourse: null,
  };
  
  const mycoursesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_MY_COURSES':
        return { ...state, mycourse: action.payload };
      case 'DELETE_COURSES':
        return { ...state, mycourse: null };
      default:
        return state;
    }
  };
  
  export default mycoursesReducer;