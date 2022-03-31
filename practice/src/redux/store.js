import { createStore, combineReducers } from "redux";
import movieredux from "./modules/movieredux";

const rootReducer = combineReducers({ movieredux });

const store = createStore(rootReducer);

export default store;
