import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {COLORS} from '../assets/colors/theme_colors';;

import Login from '../screens/Login';
import Welcome from '../screens/Welcome';
import Register from '../screens/Register';
import MobileVerification from '../screens/MobileVerification';
import Elevators from '../screens/Elevators';
import Settings from '../screens/Settings';
import Tasks from '../screens/Tasks';
import Steps from '../screens/Steps';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export function AppHome() {
  return (
    <Tab.Navigator
      initialRouteName="StepTacker"
      screenOptions={{
        headerShown: false,
        tabBarStyle: [{
          paddingVertical: 5,borderTopLeftRadius:15,borderTopRightRadius:15,backgroundColor:COLORS.PRIMARY,position:'absolute',height:70
        }]
      }}
      tabBarOptions={{
        activeTintColor: COLORS.SECONDARY,
        showLabel: false,
        }}
       >
      <Tab.Screen
        name="StepTracker"
        component={Steps}
        options={{
          tabBarIcon: ({focused}) => {
            if (focused == true) {
              return <FontAwesome5 name="walking" size={35} color={COLORS.BACKGROUND} />;
            } else if (focused == false) {
              return <FontAwesome5 name="walking" size={35} color={COLORS.ICON_COLOR} />;
            }
          },
        }}
      />
      <Tab.Screen
        name="Elevators"
        component={Elevators}
        options={{
          tabBarIcon: ({focused}) => {
            if (focused == true) {
              return <MaterialCommunityIcons name="elevator-passenger" size={35} color={COLORS.BACKGROUND} />;
            } else if (focused == false) {
              return <MaterialCommunityIcons name="elevator-passenger" size={35} color={COLORS.ICON_COLOR} />;
            }
          },
        }}
      />
      <Tab.Screen
        name="Tasks"
        component={Tasks}
        options={{
          tabBarIcon: ({focused}) => {
            if (focused == true) {
              return <FontAwesome5 name="tasks" size={30} color={COLORS.BACKGROUND} />;
            } else if (focused == false) {
              return <FontAwesome5 name="tasks" size={30} color={COLORS.ICON_COLOR} />;
            }
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({focused}) => {
            if (focused == true) {
              return <FontAwesome name="gear" size={30} color={COLORS.BACKGROUND} />;
            } else if (focused == false) {
              return <FontAwesome name="gear" size={30} color={COLORS.ICON_COLOR} />;
            }
          },
        }}
      />
    </Tab.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Mobile-Verification" component={MobileVerification} />
        <Stack.Screen name="Home" component={AppHome} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
