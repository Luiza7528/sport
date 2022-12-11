 import {combineReducers} from "redux";
 import sportsReducer from "./sportsReducer";

const reducers = combineReducers({
    sports: sportsReducer
})

 export default reducers;

export type State = ReturnType<typeof reducers>