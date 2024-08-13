import Logo from "@/components/logo";
import {StyleSheet, View, Text, TextInput, Pressable } from "react-native";
import { useFonts, JockeyOne_400Regular } from '@expo-google-fonts/jockey-one';
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import * as Burnt from "burnt";

export default function seusTreinos(){
    let [fontsLoaded] = useFonts({
        JockeyOne_400Regular,
    });

    const [nomeTreino, setNomeTreino] = useState("");
    const [exec, setExec] = useState("");
    const [series, setSeries] = useState("");
    const [reps, setReps] = useState("");

    const [treinos, setTreinos] = useState([{exec:"", series:"", reps:""}]);

    function outroTreino() {
        try{
            if (exec === "" || series === "" || reps === "") {
                Burnt.alert({
                    title: "Não é possível adicionar o exercício, verifique se os campos estão vazios",
                });
            }else {
                Burnt.alert({
                    title: "Exercício adicionado com sucesso",
                });
                treinos.push({exec, series, reps});
            }
        }catch(e) {
            console.log(e);
        }
        console.log(treinos);
        
    }


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
                        <Text style={styles.textAdd}>Adicione um nome ao seu Treino</Text>
                        <View style={styles.inputTreino}>                        
                            <TextInput 
                                style={styles.inputLabel} 
                                placeholder="Nome do treino" 
                                onChangeText={setNomeTreino}
                                placeholderTextColor={"white"}
                            />
                        </View>

                    </View>

                    <View>
                        <Text style={styles.textAdd}>Adicione os exercícios</Text>
                    </View>

                    <View style={styles.mainTreino}>
                        <View style={styles.addTreino}>
                            <TextInput 
                                style={styles.inputLabel} 
                                autoCorrect={false}
                                autoCapitalize="none"
                                placeholder="NOME" 
                                onChangeText={setExec}
                                placeholderTextColor={"white"}
                            />
                            <Picker
                            selectedValue={series}
                            style={styles.selector}
                            onValueChange={(itemValue, itemIndex) =>
                                setSeries(itemValue)
                            }
                            >
                                <Picker.Item label="Séries" value={""}/>
                                <Picker.Item label="1" value={1}/>
                                <Picker.Item label="2" value={2}/>
                                <Picker.Item label="3" value={3}/>
                                <Picker.Item label="4" value={4}/>
                                <Picker.Item label="5" value={5}/>
                                <Picker.Item label="6" value={6}/>
                                <Picker.Item label="7" value={7}/>
                                <Picker.Item label="8" value={8}/>
                                <Picker.Item label="9" value={9}/>
                                <Picker.Item label="10" value={10}/>
                            </Picker>
                            
                            <Picker
                            selectedValue={reps}
                            style={styles.selector}
                            onValueChange={(itemValue, itemIndex) =>
                                setReps(itemValue)
                            }
                            >
                                <Picker.Item label="Repetições" value={""}/>
                                <Picker.Item label="1" value={1}/>
                                <Picker.Item label="2" value={2}/>
                                <Picker.Item label="3" value={3}/>
                                <Picker.Item label="4" value={4}/>
                                <Picker.Item label="5" value={5}/>
                                <Picker.Item label="6" value={6}/>
                                <Picker.Item label="7" value={7}/>
                                <Picker.Item label="8" value={8}/>
                                <Picker.Item label="9" value={9}/>
                                <Picker.Item label="10" value={10}/>
                                <Picker.Item label="11" value={11}/>
                                <Picker.Item label="12" value={12}/>
                                <Picker.Item label="13" value={13}/>
                                <Picker.Item label="14" value={14}/>
                                <Picker.Item label="15" value={15}/>
                                <Picker.Item label="16" value={16}/>
                                <Picker.Item label="17" value={17}/>
                                <Picker.Item label="18" value={18}/>
                                <Picker.Item label="19" value={19}/>
                                <Picker.Item label="20" value={20}/>
                            </Picker>
                        </View>
                    </View>

                    <Pressable style={styles.btnMais} onPress={outroTreino}>
                        <Text style={styles.textMais}>+</Text>
                    </Pressable>

                    <Pressable onPress={outroTreino}>
                        <Text>Finalizar Treino</Text>
                    </Pressable>
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
        width: 200,
    },

    addTreino: {
        alignItems: 'center'
    },

    selector: {
        width: 200,
        height: 50,
        borderRadius: 10,
    },

    btnMais: {
        marginTop: 50,
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: '#6070FD'
    },

    textMais: {
        fontFamily: 'JockeyOne_400Regular',
        fontSize: 50,
        color: 'white',
    },

    mainTreino: {
        padding: 40,
        backgroundColor: 'rgba(187, 240, 37, 1)',
        marginTop: 20,
        borderRadius: 20
    }, 
    inputTreino: {
        alignItems: 'center',
        padding: 30
    } 
});