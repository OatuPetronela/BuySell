import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { categoryListReducer } from "./reducers/categoryReducers";
import {userLoginReducer, userRegisterReducer } from "./reducers/userReducers";

const reducer = combineReducers({ categoryList: categoryListReducer, userLogin: userLoginReducer, userRegister: userRegisterReducer });

const userInfoFromStorage = localStorage.getItem('userInfo')
?JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {userLogin: {userInfo: userInfoFromStorage}};

const middleware = [thunk];

const composeEnhancers = composeWithDevTools(applyMiddleware(...middleware));
const store = createStore(reducer, initialState, composeEnhancers);

export default store;
