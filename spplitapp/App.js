import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';  // only for ios!
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Follower from './src/routes/Follower';
import Landing from './src/routes/Landing';
import Login from './src/routes/Login';
import Main from './src/routes/Main';
import MyNameCard from './src/routes/MyNameCard';
import Notice from './src/routes/Notice';
import Settings from './src/routes/Settings';
import SignUp from './src/routes/SignUp';
import Header from './src/components/Header';
import Sidebar from './src/components/Sidebar';
import StackNavigator from './src/routes/StackNavigator';
import Schedule from './src/routes/Schedule';
import Detail from './src/routes/Detail';

const Drawer = createDrawerNavigator();
const MainStack = createStackNavigator();
const ScheduleStack = createStackNavigator();


const MainStackScreen = ({navigation}) => {
    return(
      <MainStack.Navigator
        initialRouteName="Main"
        screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: 'white'}
        }}
      >
        <MainStack.Screen name="Main" component={Main} />
        <MainStack.Screen name="Login" component={Login} />
        <MainStack.Screen name="Notice" component={Notice} />
        <MainStack.Screen 
          name="Detail"
          component={Detail}
          options={navigation => ({
            headerBackTitleVisible: false,
            cardStyleInterpolator: ({current: {progress}}) => {
              return {
                cardStyle: {
                  opacity: progress
                }
              }
            }
          })}
        />
      </MainStack.Navigator>
    )
  }

  const ScheduleStackScreen = ({navigation}) => {
    return (
      <ScheduleStack.Navigator
        screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: 'white'}
        }}
      >
        <ScheduleStack.Screen name="Schedule" component={Schedule} />
      </ScheduleStack.Navigator>
    )
  }



export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Main" component={MainStackScreen}/>
        <Drawer.Screen name="Schedule" component={ScheduleStackScreen}/>
        <Drawer.Screen name="Settings" component={Settings}/>
        <Drawer.Screen name="MyNameCard" component={MyNameCard}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
