// import { createStore, applyMiddleware, compose } from "redux";
// import thunkMiddleware from "redux-thunk";
// import reducer from "../reducer/reducer";

// const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose; 

// const store = createStore(
//     reducer,
//     composeEnhancer(applyMiddleware(thunkMiddleware))
// );


// export default store;

import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import reducer from "../reducer/reducer";
import thunkMiddleware from "redux-thunk";
// Create the Redux store with the DevTools Extension
const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunkMiddleware)
  )
);
export default store;