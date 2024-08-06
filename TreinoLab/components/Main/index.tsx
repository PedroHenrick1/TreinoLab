import { StyleSheet, View, Text, Button, Alert } from "react-native";
import Title from "../Title";
import { useFonts, JockeyOne_400Regular } from '@expo-google-fonts/jockey-one';
import { Link, router } from "expo-router";

export default function Main() {
    let [fontsLoaded] = useFonts({
        JockeyOne_400Regular,
    });

    function handleNavigate() {
        router.navigate("/CreateUser")
    }
    if (!fontsLoaded) {
        return
    }
    else{
        return(
            <>
            
            <View style={styles.container}>
                <Title />
                <Text style={styles.frase}>Eleve o nível do seu treino aqui</Text>
            </View>
    
            <View style={styles.buttonGo} >
                <Button title="Comece Agora" onPress={handleNavigate} color={'#6AEBAD'}/>
            </View>
            
    
            
            </>
    
        )}
}

const styles = StyleSheet.create({
    container: {
        height: 350,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 40,
        backgroundColor: 'rgba(0, 0, 0, 0.82)',
    },

    frase: {
        color: 'white',
        fontSize: 25,
        fontFamily: 'JockeyOne_400Regular',
    },
    
    buttonGo: {
        marginTop: 250,
        justifyContent: 'center',
        alignItems: 'center',
    }
    

});


