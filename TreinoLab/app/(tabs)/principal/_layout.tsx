import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMugSaucer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons/faSquareCheck'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons/faDumbbell'
import { faUtensils } from '@fortawesome/free-solid-svg-icons/faUtensils'

export default function TabLayout() {
    library.add(fab, faSquareCheck, faMugSaucer)

    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
            <Tabs.Screen name="index"
            options={{
                title: "Home",
                headerShown: false,
                tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,

            }}
            />

            <Tabs.Screen name="seusTreinos"
            options={{
                title: "Seus Treinos",
                headerShown: false,
                tabBarIcon: ({ color }) => <FontAwesomeIcon icon={faDumbbell} size={28} color={color} />,
                
            }}
            />

            <Tabs.Screen name="suaAlimentacao"
            options={{
                title: "Sua alimentação",
                headerShown: false,
                tabBarIcon: ({ color }) => <FontAwesomeIcon icon={faUtensils} size={28} color={color} />,
            
            }}
            />

            <Tabs.Screen name="configs"
            options={{
                title: "Configurações",
                headerShown: false,
                tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />
            }}
            />
        </Tabs>
    )
}