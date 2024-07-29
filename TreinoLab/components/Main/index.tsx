import { StyleSheet, View, Text } from "react-native";
import Title from "../Title/Title";
import { useFonts, JockeyOne_400Regular } from '@expo-google-fonts/jockey-one';


export default function Main() {
    let [fontsLoaded] = useFonts({
        JockeyOne_400Regular,
    });
    return(
        <View style={styles.container}>
            <Title/>
            <Text style={styles.frase}>Eleve o nível do seu treino aqui</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        height: 300,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 40,
        backgroundColor: 'rgba(0, 0, 0, 0.82)',
    },

    frase: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'JockeyOne_400Regular',
    }
    

});


