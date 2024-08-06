import {StyleSheet, View, Text, Pressable } from "react-native";
import { useFonts, JockeyOne_400Regular } from '@expo-google-fonts/jockey-one';
import { NavigationContainer } from '@react-navigation/native';
import Title from "@/components/Title";
import { router } from "expo-router";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Principal() {
    let [fontsLoaded] = useFonts({
        JockeyOne_400Regular,
      });

    const getCliente = async () => {
        const valor = await AsyncStorage.getItem("@TreinoLab:users");
        const data = valor ? JSON.parse(valor) : {};
        console.log(JSON.parse(data));
    }

    useEffect(() => {
        getCliente();
    }, []);



    if (!fontsLoaded) {
        return
    }else{
        return(
            <>
            <View style={styles.logo}>
                <View style={styles.title}>
                    <Title/>
                </View>

                <View >
                    <Text style={styles.infos}>Pedro Henrick</Text>
                    <Text style={styles.infos}>Peso: 80kg</Text>
                </View>
            </View>

            
            <View style={styles.containerButton}>
                <Pressable onPress={() => {router.push('/CreateTreinos')}}>
                    <View style={styles.mainButton}>
                        <View style={styles.buttons}>
                            <Text style={styles.textButtons}>Criar novo treino</Text>
                        </View>
                    </View>
                </Pressable>

                <Pressable onPress={() => {router.push('/addFood')}}>
                    <View style={styles.mainButton}>
                        <View style={styles.buttons}>
                            <Text style={styles.textButtons}>Add Alimentação</Text>
                        </View>
                    </View>
                </Pressable>
            </View>


            </>
        )
    }
    
}

const styles = StyleSheet.create({
    logo: {
        flexDirection: 'row',
        gap: 80,
        marginTop: 50,
        backgroundColor: 'rgba(0, 0, 0, 0.82)',
        height: 80,
    },

    containerButton: {
        gap: 100,
        marginTop: 200
    },

    buttons: {
        backgroundColor: "#6AEBAD",
        width: 200,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },

    mainButton: {
        alignItems: 'center',
    },

    textButtons: {
        fontFamily: 'JockeyOne_400Regular',
        color: 'black',
        fontSize: 26,
    },

    title: {    
        justifyContent: 'center'
    },

    infos: {
        fontFamily: 'JockeyOne_400Regular',
        color: 'white',
        fontSize: 26,
    },
    container: {
        color: 'rgba(187, 240, 37, 1)',
        fontSize: 40,
        fontFamily: 'JockeyOne_400Regular',
    }
});