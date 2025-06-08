import React from 'react';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';
import {store} from './src/redux/store';

//Root Screen
import RootNavigation from './src/navigation/rootNavigations';

enableScreens();

// const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <RootNavigation/>
   </Provider>
  );
}

export default App;
