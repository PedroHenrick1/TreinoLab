import Logo from "@/components/logo";
import {StyleSheet, View, Text, TextInput } from "react-native";
import { useFonts, JockeyOne_400Regular } from '@expo-google-fonts/jockey-one';
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";

export default function seusTreinos(){
    let [fontsLoaded] = useFonts({
        JockeyOne_400Regular,
    });
    const [exec, setExec] = useState("");
    const [series, setSeries] = useState("");
    const [reps, setReps] = useState("");


    if (!fontsLoaded) {
        return
    }else{
        return(
            <>
                <View>
                    <Logo/>
                </View>

                <View style={styles.container}>
                    <View>
                        <Text style={styles.textAdd}>Adicione os exercícios</Text>
                    </View>

                    <View style={styles.addTreino}>
                        <TextInput style={styles.inputLabel} placeholder="NOME" onChangeText={setExec}/>
                        <Picker
                        >
                            <Picker.Item label="1" value={"1"}/>
                            <Picker.Item label="2" value={"2"}/>
                            <Picker.Item label="3" value={"3"}/>
                            <Picker.Item label="4" value={"4"}/>
                            <Picker.Item label="5" value={"5"}/>
                            <Picker.Item label="6" value={"6"}/>
                            <Picker.Item label="7" value={"7"}/>
                            <Picker.Item label="8" value={"8"}/>
                            <Picker.Item label="9" value={"9"}/>
                            <Picker.Item label="10" value={"10"}/>
                        </Picker>
                        
                        <Picker
                        >
                            <Picker.Item label="1" value={"1"}/>
                            <Picker.Item label="2" value={"2"}/>
                            <Picker.Item label="3" value={"3"}/>
                            <Picker.Item label="4" value={"4"}/>
                            <Picker.Item label="5" value={"5"}/>
                            <Picker.Item label="6" value={"6"}/>
                            <Picker.Item label="7" value={"7"}/>
                            <Picker.Item label="8" value={"8"}/>
                            <Picker.Item label="9" value={"9"}/>
                            <Picker.Item label="10" value={"10"}/>
                            <Picker.Item label="11" value={"11"}/>
                            <Picker.Item label="12" value={"12"}/>
                            <Picker.Item label="13" value={"13"}/>
                            <Picker.Item label="14" value={"14"}/>
                            <Picker.Item label="15" value={"15"}/>
                            <Picker.Item label="16" value={"16"}/>
                            <Picker.Item label="17" value={"17"}/>
                            <Picker.Item label="18" value={"18"}/>
                            <Picker.Item label="19" value={"19"}/>
                            <Picker.Item label="20" value={"20"}/>
                        </Picker>
                    </View>
                </View>

            </>
        );
    }
}

const styles = StyleSheet.create({
    textAdd: {
        fontFamily: 'JockeyOne_400Regular',
        color: 'black',
        fontSize: 26,
    },

    container: {
        justifyContent: 'center', 
        alignItems: 'center'
    },

    inputLabel: {
        backgroundColor: '#838695', 
        color: 'white',
        borderRadius: 10,
        height: 40,
        width: 100,
        marginTop: 50
    },

    addTreino: {
    }
});
