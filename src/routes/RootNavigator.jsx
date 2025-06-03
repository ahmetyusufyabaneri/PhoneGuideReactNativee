import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screenNames} from '../constants';
import AddContact from '../screens/AddContact';
import ContactList from '../screens/ContactList';
import ContactDetail from '../screens/ContactDetail';
import Groups from '../screens/Groups';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={screenNames.Groups}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={screenNames.AddContact} component={AddContact} />
      <Stack.Screen name={screenNames.ContactList} component={ContactList} />
      <Stack.Screen
        name={screenNames.ContactDetail}
        component={ContactDetail}
      />
      <Stack.Screen name={screenNames.Groups} component={Groups} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
