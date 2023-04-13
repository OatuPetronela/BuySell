import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { categoryListReducer } from "./reducers/categoryReducers";

const reducer = combineReducers({ categoryList: categoryListReducer });
const initialState = {};

const middleware = [thunk];

const composeEnhancers = composeWithDevTools(applyMiddleware(...middleware));
const store = createStore(reducer, initialState, composeEnhancers);

export default store;
