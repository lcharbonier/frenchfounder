import { Provider } from 'react-redux';
import AppNavigator from './App/navigators/AppNavigator';
import createStore from './App/redux/store';

export default () => {
  const store = createStore();
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};
