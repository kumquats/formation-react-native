import { createStore, applyMiddleware, compose } from "redux";
import { createReactNavigationReduxMiddleware } from "react-navigation-redux-helpers";
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
        	applyMiddleware(navMiddleware)
		)
	);
}