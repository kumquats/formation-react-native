import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchForm from './SearchForm';
import HousingList from './HousingList';
import HousingDetail from './HousingDetail';

const Navigator = createStackNavigator({
    list: HousingList,
    detail: HousingDetail,
    search: SearchForm
});
export default createAppContainer( Navigator );