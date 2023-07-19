import { combineReducers } from "redux";
import goalReducer from "./reducer/goalReducer";
import showModalReducer from "./reducer/showModalReducer";


export default combineReducers({
 goal: goalReducer,
 showModal: showModalReducer
})