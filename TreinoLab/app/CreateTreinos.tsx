import Logo from "@/components/logo";
import {StyleSheet, View, Text, TextInput, Pressable } from "react-native";
import { useFonts, JockeyOne_400Regular } from '@expo-google-fonts/jockey-one';
import { useEffect, useState } from "react";
import { Picker } from "@react-native-picker/picker";
import * as Burnt from "burnt";
import uuid from 'react-native-uuid';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

export default function CreateTreinos(){
    let [fontsLoaded] = useFonts({
        JockeyOne_400Regular,
    });

    const [nomeTreino, setNomeTreino] = useState("");
    const [exec, setExec] = useState("");
    const [series, setSeries] = useState("");
    const [reps, setReps] = useState("");

    const [treinos, setTreinos] = useState([{}]);

    async function outroTreino() {
        try{
            if (exec === "" || series === "" || reps === "") {
                Burnt.alert({
                    title: "Não é possível adicionar o exercício, verifique se os campos estão vazios",
                });
            }else {
                Burnt.alert({
                    title: "Exercício adicionado com sucesso",
                });
                const id = uuid.v4();
                treinos.push({id, exec, series, reps});

                let newData = {
                    id,
                    nomeTreino,
                    treinos
                }

                await AsyncStorage.setItem("@TreinoLab:treinos", JSON.stringify(newData));

                console.log(newData);

                newData = {id: "", nomeTreino: "", treinos: []}

                console.log(newData);
            }
        }catch(e) {
            console.log(e);
        }
        console.log(treinos);
        
    }

    async function finalizarTreino () {
        try{
            console.log(treinos.length);
            

            if (nomeTreino === "" || treinos.length === 1){
                Burnt.alert({
                    title: "Não é possível finalizar o treino, nenhum treino foi adicionado",
                });
            }else {

                
                Burnt.alert({
                    title: "Treino adicionado com sucesso",
                });

                router.push("/principal");

                
            }

        }catch(e){
            console.log(e);
            Burnt.alert({
                title: "Ocorreu um erro",
            });
        }
    }

    const removeTreino = async () => {
        const remove  = await AsyncStorage.removeItem("@TreinoLab:treinos");
    }

    //removeTreino();

    const Treinos = async () => {
        const treino  = await AsyncStorage.getItem("@TreinoLab:treinos");
        console.log(treino);
    }

    useEffect(()=> {
        Treinos();
    },[outroTreino]);

    if (!fontsLoaded) {
        return
    }else{
        return(
            <>
                <View>
                    <Logo/>
                </View>

                <View style={styles.container}>

                    <View style={styles.containerAdd}>
                        <View>
                            <Text style={styles.textAdd}>Adicione um nome ao seu Treino</Text>
                        </View>
                        
                        <View style={styles.inputTreino}>                        
                            <TextInput 
                                style={styles.inputNomeTreino} 
                                placeholder="Nome do Treino"
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
                                placeholder="Nome do exercício" 
                                onChangeText={setExec}
                                placeholderTextColor={"white"}
                            />
                            <Picker
                            selectedValue={series}
                            style={styles.selector}
                            onValueChange={(itemValue, itemIndex) =>
                                setSeries(itemValue)
                            }>
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

                    <Pressable onPress={finalizarTreino}>
                        <View >
                            <View style={styles.buttons}>
                                <Text style={styles.textButtons}>Finalizar Treino</Text>
                            </View>

                        </View>

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
        alignItems: 'center',
        marginTop: 30
    },

    inputLabel: {
        backgroundColor: '#838695', 
        color: 'white',
        borderRadius: 10,
        height: 40,
        width: 200,
        shadowRadius: 10, 
        padding: 10
    },

    inputNomeTreino: {
        backgroundColor: '#838695', 
        color: 'white',
        borderRadius: 10,
        height: 40,
        width: 300,
        shadowRadius: 10, 
        padding: 10
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
        marginTop: 30,
        marginBottom: 30,
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
        borderRadius: 20,
        elevation: 20,
        shadowColor: "black"
    }, 
    inputTreino: {
        alignItems: 'center',
        padding: 30
    },
    
    buttons: {
        backgroundColor: "#6AEBAD",
        width: 200,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },

    textButtons: {
        fontFamily: 'JockeyOne_400Regular',
        color: 'black',
        fontSize: 26,
    },

    containerAdd: {
        alignItems: 'center'
    }
});