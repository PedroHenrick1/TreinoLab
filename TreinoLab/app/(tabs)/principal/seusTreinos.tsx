import {StyleSheet, View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import Logo from "@/components/logo";

export default function seusTreinos(){

    const [nomeTreino, setNomeTreino] = useState("");
    const [allTreinos, setAllTreinos] = useState([]);
    const [qtdTreinos, setQtdTreinos] = useState(0);

    async function fetchTreinos () {
        const treinos = await AsyncStorage.getItem("@TreinoLab:treinos")
        const data = treinos ? JSON.parse(treinos) : {};
        setAllTreinos(data);
        
    }

    useEffect(() => {
        fetchTreinos();
    }, []);

    console.log(allTreinos);
    console.log(nomeTreino);
    return(
        <>
            <View>
                <Logo />
            </View>


            <View>
                <Text>Seus treinos:</Text>
                {/* <Text>{nomeTreino}</Text> */}
                {/* <Text>{allTreinos}</Text> */}

            </View>
        </>
    );
}