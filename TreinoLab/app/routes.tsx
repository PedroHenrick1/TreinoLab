import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Principal from './(tabs)';
import seusTreinos from './(tabs)/seusTreinos';
import suaAlimentacao from './(tabs)/suaAlimentacao';
import configs from './(tabs)/configs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return(
        <Tab.Navigator>
            <Tab.Screen
                name='home'
                component={Principal}
            />

            <Tab.Screen
                name='seuTreinos'
                component={seusTreinos}
            />

            <Tab.Screen
                name='suaAlimentacao'
                component={suaAlimentacao}
            />

            <Tab.Screen
                name='configs'
                component={configs}
            />
        </Tab.Navigator>
        
    )
}



