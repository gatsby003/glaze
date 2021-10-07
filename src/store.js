import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import backgroundReducer from "./reducers/backgroundReducer";
import quoteReducer from "./reducers/quoteReducer";

const reducer = combineReducers({
    background : backgroundReducer,
    quote : quoteReducer
})

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

console.log(store.getState())

export default store