import { createStore, compose, applyMiddleware } from "redux";
import reducer from "./reducers";
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(){
    return createStore( reducer, composeEnhancers(
        applyMiddleware(thunk)
    ) );
}