import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import Logo from '@/components/logo';
import { Picker } from '@react-native-picker/picker'
import { router } from 'expo-router';
import { useFonts, JockeyOne_400Regular } from '@expo-google-fonts/jockey-one';



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
  };

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
          placeholder='Nome' />
          <Text style={styles.nameLabel}>Data de nascimento</Text>
          <TextInput
            style={styles.inputLabel}
            placeholder='Data de nascimento'
            value={date.toLocaleDateString()}
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
            selectedValue={selectedLanguage}
            style={styles.selector}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
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
          />

          <View style={styles.btnCreate}>
            <Button title="Criar Perfil" onPress={handleNavigate} color={'#6AEBAD'}/>
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




