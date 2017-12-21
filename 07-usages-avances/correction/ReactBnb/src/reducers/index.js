import { combineReducers } from 'redux';

// On importe les sous-reducers
import { reducer as form } from 'redux-form';
import housingList from './housingList';
import housingDetail from './housingDetail';
import nav from './nav';
import newHousing from './newHousing';

// Combine reducers prend en paramètre un objet
// dont les clés représentent les propriétés du state
// et les valeur les sous-reducers qui s'en occupent
export default combineReducers({
    housingList,
    housingDetail,
    nav,
    form,
    newHousing
});