import {StyleSheet, View, Text } from "react-native";
import { useFonts, JockeyOne_400Regular } from '@expo-google-fonts/jockey-one';
import { NavigationContainer } from '@react-navigation/native';
import TabRoutes from "../routes";

export default function Principal() {
    let [fontsLoaded] = useFonts({
        JockeyOne_400Regular,
      });

    if (!fontsLoaded) {
        return
    }else{
        return(
            <>
                <NavigationContainer>
                    <TabRoutes/>
                </NavigationContainer>
            </>
        )
    }
    
}

const styles = StyleSheet.create({
    container: {
        color: 'rgba(187, 240, 37, 1)',
        fontSize: 40,
        fontFamily: 'JockeyOne_400Regular',
    }
});