import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
            <Tabs.Screen name="index"
            options={{
                title: "Home"
            }}
            />

            <Tabs.Screen name="seusTreinos"
            options={{
                title: "Seus Treinos"
                
            }}
            />

            <Tabs.Screen name="suaAlimentacao"
            options={{
                title: "Sua alimentação"
            
            }}
            />

            <Tabs.Screen name="configs"
            options={{
                title: "Configurações"
            }}
            />
        </Tabs>
    )
}