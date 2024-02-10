const initialState = {
    course: null,
  };
  
  const courseReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_COURSES':
        return { ...state, course: action.payload };
      case 'DELETE_COURSES':
        return { ...state, course: null };
      default:
        return state;
    }
  };
  
  export default courseReducer;