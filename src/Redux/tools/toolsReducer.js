const initialState = {
    scroll: 0,
  };
  
  export const toolsReducer = (state = initialState, action) => {
    switch (action.type) {
      case "setscroll":
        return {
            scroll: action.value,
        };
    
      default:
        return state;
    }
  };