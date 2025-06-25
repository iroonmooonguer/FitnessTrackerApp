import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import AddHabitScreen from '../screens/AddHabitScreen';
import HabitDetailScreen from '../screens/HabitDetailScreen';

export type RootStackParamList = {
    Home: undefined;
    AddHabit: undefined;
    HabitDetail: { habitId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Hábitos' }} />
                <Stack.Screen name="AddHabit" component={AddHabitScreen} options={{ title: 'Nuevo Hábito' }} />
                <Stack.Screen name="HabitDetail" component={HabitDetailScreen} options={{ title: 'Detalle' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
