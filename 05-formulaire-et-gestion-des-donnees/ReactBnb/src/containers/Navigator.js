import React from 'react';
import { createStackNavigator } from 'react-navigation';
import SearchForm from './SearchForm';
import HousingList from './HousingList';
import HousingDetail from './HousingDetail';

const Navigator = createStackNavigator({
    list: HousingList,
    detail: HousingDetail,
    search: SearchForm
});
export default Navigator;