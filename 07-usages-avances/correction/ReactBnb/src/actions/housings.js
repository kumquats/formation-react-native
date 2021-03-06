import { formValueSelector } from 'redux-form';

export const HOUSING_LIST_COMPLETE = 'HOUSING_LIST_COMPLETE';

export const fetchHousings = function() {
    return function( dispatch, getState ) {
        const selector = formValueSelector('search');
        const city = selector( getState(), 'city' );
        const minDate = selector( getState(), 'minDate' );
        const maxDate = selector( getState(), 'maxDate' );
        return fetch(`https://www.airbnb.fr/api/v2/explore_tabs?key=d306zoyjsyarp7ifhu67rjxn52tv0t20&_format=for_explore_search_web&currency=EUR&locale=fr&refinement_paths%5B%5D=%2Fhomes&is_guided_search=true&location=${ city && city }&checkin=${ minDate && minDate.toISOString() }&checkout=${ maxDate && maxDate.toISOString() }`)
            .then(response => response.json())
            .then(responseJson => {
                dispatch({
                    type: HOUSING_LIST_COMPLETE,
                    housings: responseJson.explore_tabs[0].sections.find(section=> (section.result_type == 'listings') ).listings
                });
            })
    };
}

export const HOUSING_DETAIL_COMPLETE = 'HOUSING_DETAIL_COMPLETE';

export const fetchHousingDetail = function( id ) {
    return function( dispatch, getState ) {
        dispatch({
            type: HOUSING_DETAIL_COMPLETE,
            housing: getState().housingList.find( housing => housing.listing.id == id )
        });
    };
}