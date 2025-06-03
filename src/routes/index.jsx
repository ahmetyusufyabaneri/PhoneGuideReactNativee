import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './RootNavigator';

const Routes = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default Routes;
