import React from 'react';
import { createStackNavigator } from 'react-navigation';
import SearchForm from './SearchForm';
import HousingList from './HousingList';
import HousingDetail from './HousingDetail';

const Navigator = createStackNavigator({
    list: {
        screen: HousingList,
        path: 'list'
    },
    detail: {
      screen: HousingDetail,
      path: 'detail/:id'
    },
    search: {
        screen: SearchForm,
        path: 'search'
    }
});
export default Navigator;