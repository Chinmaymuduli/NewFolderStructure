import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from '../layouts/BottomTab';
import {PrivateRoutesTypes} from './types';

const Stack = createNativeStackNavigator();
type PrivateRouteProps = {
  initialRouteName?: keyof PrivateRoutesTypes;
};
const PrivateRoutes = ({initialRouteName}: PrivateRouteProps) => {
  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="BottomTab" component={BottomTab} />
    </Stack.Navigator>
  );
};

export default PrivateRoutes;
