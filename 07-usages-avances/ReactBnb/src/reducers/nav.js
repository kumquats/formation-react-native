// On récupère le MainNavigator
import { MainNavigator } from '../containers/Main';

// On récupère le state initial
const initialState = MainNavigator.router.getStateForAction(
    MainNavigator.router.getActionForPathAndParams('list')
);

export default (state = initialState, action) => {
    // On récupère le nextState
    const nextState = MainNavigator
        .router
        .getStateForAction(action, state)
    ;

    // Si le nextState existe on le retourne,
    // sinon on retourne le state
    return nextState || state;
};