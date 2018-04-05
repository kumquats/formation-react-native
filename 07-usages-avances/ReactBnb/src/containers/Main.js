import React from 'react';
import {connect} from 'react-redux';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers';
import SearchForm from './SearchForm';
import HousingList from './HousingList';
import HousingDetail from './HousingDetail';
import CreateForm from './CreateForm';

// On crée le navigator et on l'exporte pour pouvoir
// l'utiliser dans le reducer par la suite
export const MainNavigator = StackNavigator({
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
    },
    create: {
      screen: CreateForm,
      path: 'create'
    }
});

class Main extends React.Component {
  render() {
    return (
      <MainNavigator navigation={addNavigationHelpers({
        // On passe la fonction dispatch et le state de la
        // navigation au navigator
        dispatch: this.props.dispatch,
		state: this.props.nav,
		addListener: createReduxBoundAddListener('root')
			// 'root'= identifiant passé en middleware du store. cf. store.js
      })} />
    );
  }
}

// On connecte le composant au store Redux
const mapStateToProps = (state) => ({
  nav: state.nav
});

export default connect(mapStateToProps)(Main);