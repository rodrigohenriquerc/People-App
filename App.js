import { createAppContainer, createStackNavigator } from 'react-navigation';

import { capitalizeFirstLetter } from './src/util';

import PeopleScreen from './src/screens/PeopleScreen';
import PersonScreen from './src/screens/PersonScreen';

const StackNavigator = createStackNavigator({
  'Main': {
    screen: PeopleScreen
  },
  'PersonScreen': {
    screen: PersonScreen,
    navigationOptions: ({ navigation }) => {
      const personTitle = capitalizeFirstLetter(navigation.state.params.person.name.title);
      const personFirst = capitalizeFirstLetter(navigation.state.params.person.name.first);
      const personLast = capitalizeFirstLetter(navigation.state.params.person.name.last);
      return ({
        title: `${personTitle} ${personFirst} ${personLast}`,
        headerTitleStyle: {
          color: '#fff',
          fontSize: 30
        }
      });
    }
  }
}, {
    'defaultNavigationOptions': {
      title: 'Pessoas',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#6ca2f7',
        borderBottomWidth: 1,
        borderBottomColor: '#c5c5c5'
      },
      headerTitleStyle: {
        color: '#fff',
        fontSize: 30,
        flexGrow: 1,
        textAlign: 'center'
      }
    }
  });

const AppContainer = createAppContainer(StackNavigator);

export default AppContainer;