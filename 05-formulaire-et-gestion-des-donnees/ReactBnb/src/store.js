import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(){
	return createStore(
		reducer,
		composeEnhancers()
	);
}