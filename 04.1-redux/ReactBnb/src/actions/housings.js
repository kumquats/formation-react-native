import housings from '../data/housings.json';

export const HOUSING_LIST_COMPLETE = 'HOUSING_LIST_COMPLETE';

export const fetchHousings = function() {
    return {
        type: HOUSING_LIST_COMPLETE,
        housings
    };
}

export const HOUSING_DETAIL_COMPLETE = 'HOUSING_DETAIL_COMPLETE';

export const fetchHousingDetail = function( id ) {
    return {
        type: HOUSING_DETAIL_COMPLETE,
        housing: housings.find( housing => housing.listing.id == id )
    };
}