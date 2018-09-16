import { HOUSING_LIST_COMPLETE } from '../actions/housings';

export default function( state = [], action ) {
    if ( action.type == HOUSING_LIST_COMPLETE )
    {
        return action.housings;
    }
    return state;
}
