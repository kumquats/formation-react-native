// import { HOUSING_DETAIL_COMPLETE } from '../actions/housings';
import {HOUSING_DETAIL_COMPLETE} from '../actions/housings';

export default function( state = null, action ) {
    if ( action.type == HOUSING_DETAIL_COMPLETE )
    {
        return action.housing;
    }
    return state;
}
