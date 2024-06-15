/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './components/AppNavigator';
// import CreateTable from './components/GynoApp/DBfiles/CreateTable';
import { AppProvider } from './components/AppContext';

function App() {
  return (
    //For Adding context
    <AppProvider> 
      <NavigationContainer>
        {/* <CreateTable /> */}
        {/*For creating tables in DB  */}
        <AppNavigator />
      </NavigationContainer>
    </AppProvider>
  );
}

export default App;
