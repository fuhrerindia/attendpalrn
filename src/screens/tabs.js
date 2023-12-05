import React from 'react'
import { DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer'
import Dashboard from './dashboard';
import constants from '../constants';
import DrawerContentComp from '../comp/drawer';

const Drawer = createDrawerNavigator();


export default function TabViews() {
  return (
    <Drawer.Navigator screenOptions={{
      headerShown: false,
      drawerStyle: {
        backgroundColor: constants.colors.black,
      }
    }}
      drawerContent={(props) => <DrawerContentComp {...props} />}
    >
      <Drawer.Screen name='Overview' component={Dashboard} />
      <Drawer.Screen name='Bulk Attendance' component={Dashboard} />
      <Drawer.Screen name='ds' component={Dashboard} />
      <Drawer.Screen name='Buldsfk Attendance' component={Dashboard} />
    </Drawer.Navigator>
  )
}