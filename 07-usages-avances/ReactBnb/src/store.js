import { createStore, compose, applyMiddleware } from "redux";
import { createReactNavigationReduxMiddleware } from "react-navigation-redux-helpers";
import thunk from 'redux-thunk';
import reducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(){
	const navMiddleware = createReactNavigationReduxMiddleware(
		'root',
		state => state.nav,
	);

    return createStore(
		reducer,
		composeEnhancers(
        	applyMiddleware(thunk, navMiddleware)
		)
	);
}