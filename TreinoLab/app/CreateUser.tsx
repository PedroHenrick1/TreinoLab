import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import Logo from '@/components/logo';
import { Picker } from '@react-native-picker/picker'
import { router } from 'expo-router';
import { useFonts, JockeyOne_400Regular } from '@expo-google-fonts/jockey-one';
import uuid from 'react-native-uuid'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message'


const CreateUser = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [show, setShow] = useState<boolean>(false);
  const [selectedLanguage, setSelectedLanguage] = useState();
  let [fontsLoaded] = useFonts({
    JockeyOne_400Regular,
  });
  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    setNasc(currentDate.toLocaleDateString());
  };

  const [name, setName] = useState("");
  const [nasc, setNasc] = useState("");
  const [dias, setDias] = useState("");
  const [peso, setPeso] = useState("");

  const  handleNew = async() => {
    const id = uuid.v4();

    const newData = {
      id,
      name,
      nasc,
      dias,
      peso
    }

    await AsyncStorage.setItem("@TreinoLab:users", JSON.stringify(newData));
    Toast.show({
      type: "success",
      text1: "Usuário cadastrado com sucesso"
    })

    console.log(newData);
    
  }

  function handleNavigate() {
    router.replace('/Principal')
  }

  if (!fontsLoaded) {
    return
  }else{
    return (
      <View>
        <Logo />
        <View style={styles.container}>
          <Text style={styles.nameLabel}>Digite seu nome</Text>
          <TextInput
            style={styles.inputLabel} 
            placeholder='Nome' 
            onChangeText={setName}
            
          />
          <Text style={styles.nameLabel}>Data de nascimento</Text>
          <TextInput
            style={styles.inputLabel}
            placeholder='Data de nascimento'
            value={nasc}
            onFocus={() => setShow(true)}
            
          />
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode="date"
              display="default"
              onChange={onChange}
              
            />
          )}
          <Text style={styles.nameLabel}>Quais dias da semana você treina?</Text>
          <Picker
            selectedValue={dias}
            style={styles.selector}
            onValueChange={(itemValue, itemIndex) => setDias(itemValue)
            }>
            <Picker.Item label="Segunda a Sexta" value="segunda-sexta" />
            <Picker.Item label="Segunda a Sábado" value="segunda-sabado" />
            <Picker.Item label="Domingo a Domingo" value="domingo" />
          </Picker>
          <Text style={styles.nameLabel}>Digite seu peso</Text>
          <TextInput
            style={styles.inputLabel}
            placeholder='Ex: 80.5'
            keyboardType='numeric'
            onChangeText={setPeso}
          />

          <View style={styles.btnCreate}>
            <Button title="Criar Perfil" onPress={handleNew} color={'#6AEBAD'}/>
          </View>



        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 20
  },

  btnCreate: {
    marginTop: 100,
    color: 'black',
  },

  nameLabel: {
    fontSize: 20,
    fontFamily: 'JockeyOne_400Regular'
  },

  inputLabel: {
    backgroundColor: '#838695', 
    color: 'white',
    borderRadius: 10,
    height: 40
  },

  selector: {
    width: 350,
    height: 50,
    color: 'white',
    backgroundColor: '#838695',
    borderRadius: 10,
  }
});

export default CreateUser;




