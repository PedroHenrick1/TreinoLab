import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import CreateUser from "@/app/CreateUser";
import Main from "@/components/Main";

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="CreateUser"
                    component={CreateUser}
                    options={{headerTitle: "Criar Usuário"}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}