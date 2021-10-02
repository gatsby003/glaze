import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import backgroundReducer from "./reducers/backgroundReducer";


const store = createStore(
    backgroundReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store