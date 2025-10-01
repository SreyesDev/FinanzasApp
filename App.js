import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootScreen from './src/container/root/navigation/RootScreen';


const App = () => {
  return (
    <SafeAreaProvider>
      <RootScreen />
    </SafeAreaProvider>
  );
};


export default App;
