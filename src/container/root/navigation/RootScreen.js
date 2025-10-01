import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { navigationRef } from './NavigationService';
import STACK_ROUTES from '../routes/StackRoutes';
import TAB_ROUTES from '../routes/TabRoutes';
import DRAWER_ROUTES from '../routes/DrawerRoutes';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const TabNavigator = createBottomTabNavigator();

const TabNavigation = () => (
  <TabNavigator.Navigator initialRouteName={"Dashboard"} screenOptions={{ headerShown: false }}>
    {TAB_ROUTES.map((route, index) => (
      <TabNavigator.Screen key={`route_${index}`} {...route} />
    ))}
  </TabNavigator.Navigator>
);

const DrawerNavigator = () => (
  <Drawer.Navigator initialRouteName="TabMenu" screenOptions={{ headerShown: false }}>
    <Drawer.Screen name={"TabMenu"} component={TabNavigation} />
    {DRAWER_ROUTES.map((route, index) => (
      <Drawer.Screen key={`route_${index}`} {...route} />
    ))}
  </Drawer.Navigator>
);

function RootScreen() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName={"Login"} screenOptions={{ headerShown: false }}>
        <Stack.Screen name={"Dashboard"} component={DrawerNavigator} options={{ headerShown: false }} />
        {STACK_ROUTES.map((route, index) => (
          <Stack.Screen key={`route_${index}`} {...route} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootScreen;
