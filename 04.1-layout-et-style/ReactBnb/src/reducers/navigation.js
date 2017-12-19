import { CHANGE_SCREEN } from "../actions/navigation";

const defaultState = {
    screen: 'list',
    params: {}
};

export default function( state = defaultState, action ) {
    if ( action.type == CHANGE_SCREEN )
    {
        return {
            screen: action.screen,
            params: action.params,
        };
    }
    return state;
}