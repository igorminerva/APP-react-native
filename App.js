import React from 'react';

import Tela1 from './Tela1';
import Tela2 from './Tela2';
import Tela3 from './Tela3';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator backBehavior='history'>
        <Tab.Screen name='Home' component={Tela1} options={{tabBarIcon: () => <MaterialCommunityIcons name="basketball" size={24} color="black" />}}/>
        <Tab.Screen name='Player' component={Tela2} options={{tabBarIcon: () => <MaterialCommunityIcons name="basketball-hoop" size={24} color="black" />}}/>
        <Tab.Screen name='Year' component={Tela3} options={{tabBarIcon: () => <Ionicons name="stats-chart" size={24} color="black" />}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

