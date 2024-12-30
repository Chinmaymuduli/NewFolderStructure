import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import PrivateRoutes from './src/routes/private';

const App = () => {
  return (
    <NavigationContainer>
      <PrivateRoutes />
    </NavigationContainer>
  );
};

export default App;
