import { Text, View } from "react-native";
import Main from "@/components/Main";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { router } from "expo-router";

export default function Index() {
  useEffect(() => {
    const checkUser = async () => {
      const user  = await AsyncStorage.getItem("@TreinoLab:users");
      // console.log(user);
      
      if (user !== null) {
        router.replace("/principal");
      }
    }

    const removeUser = async () => {
      const remove  = await AsyncStorage.removeItem("@TreinoLab:users")
    }

    // removeUser();

    const User = async () => {
      const user  = await AsyncStorage.getItem("@TreinoLab:users");
      // console.log(user);
    }

    // User();


    checkUser();

  }, []);

  return (
    <View>
      <Main/>
    </View>
  );
}
