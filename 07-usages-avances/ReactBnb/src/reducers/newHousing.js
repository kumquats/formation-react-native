import { HOUSING_CREATE } from '../actions/housings';

export default function( state = null, action ) {
    if ( action.type == HOUSING_CREATE )
    {
        return action.housing;
    }
    return state;
}
