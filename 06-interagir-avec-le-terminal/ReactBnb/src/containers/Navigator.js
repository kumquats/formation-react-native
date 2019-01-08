import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import SearchForm from './SearchForm';
import HousingList from './HousingList';
import HousingDetail from './HousingDetail';

const Navigator = createStackNavigator({
    search: SearchForm,
    list: HousingList,
    detail: HousingDetail,
});
export default createAppContainer( Navigator );