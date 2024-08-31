const initialState = {
    login: false,
  };
  
  export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case "login":
        return {
          login: true,
        };
      case "logout":
        return {
          login: false,
        };
      default:
        return state;
    }
  };