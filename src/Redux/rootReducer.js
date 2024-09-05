import { combineReducers } from "redux";
import { loginReducer } from "./login/loginReducer";
import { toolsReducer } from "./tools/toolsReducer";




const rootReducer = combineReducers({
    loginReducer: loginReducer,
    toolsReducer: toolsReducer,
   
})

export default rootReducer