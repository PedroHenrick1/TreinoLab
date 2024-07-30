import {StyleSheet, View, Text } from "react-native";

import { useFonts, JockeyOne_400Regular } from '@expo-google-fonts/jockey-one';

export default function Title() {
    let [fontsLoaded] = useFonts({
        JockeyOne_400Regular,
      });

    if (!fontsLoaded) {
        return
    }else{
        return(
            <View>
                <Text style={styles.container}>TreinoLab</Text>
            </View>
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