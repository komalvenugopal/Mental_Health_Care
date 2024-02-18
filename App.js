import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import VoiceRecorder from './screens/VoiceRecorderScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MenuScreen from './screens/MenuScreen';
import ProfileScreen from './screens/ProfileScreen';
import TherapistScreen from './screens/TherapistScreen';
import SmithScreen from './screens/SmithScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
         <Stack.Navigator
         initialRouteName="WelcomeScreen"
      screenOptions={{
        headerShown: false, // This will hide the header globally for all screens
      }}>      
        <Stack.Screen name="VoiceRecorder" component={VoiceRecorder} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="MenuScreen" component={MenuScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="TherapistScreen" component={TherapistScreen} />
        <Stack.Screen name="SmithScreen" component={SmithScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;