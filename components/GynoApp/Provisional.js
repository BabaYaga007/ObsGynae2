import {useState} from 'react';
import {
  ScrollView,
  FlatList,
  View,
  Text,
  TextInput,
  Button,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {styles} from '../../assets/Style/styles';
import PatCard from './PatCard';

export default function Provisional({navigation, route}) {
  let Presc_data = route.params;

  const [provDiag, setProvDiag] = useState('');

  function handleNext() {
    // if (!provDiag) {
    //   alert('Please fill Provisional Diagnosis');
    //   return;
    // }

    Presc_data = {
      ...Presc_data,
      provDiag: provDiag,
    };

    console.log('In Provisional', Presc_data);

    navigation.navigate('Medicines', Presc_data);
  }

  return (
    <View style={styles.container}>
      {/* <View> */}
      {/* <Text style={styles.heading}>List of Patients</Text> */}
      {/* <Text>Prescriptions</Text> */}
      {/* </View> */}
      <ScrollView style={styles.contentContainer}>
        {/* <View style={{ marginTop: 0 }}> */}
        <PatCard
          Id={Presc_data.patId}
          Name={Presc_data.patName}
          Age={Presc_data.patAge}
          Num={Presc_data.patPhone}
        />
        {/* </View> */}

        {/* <View style={{ marginTop: 15 }}> */}
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Provisional Diagnosis</Text>
          <TextInput
            style={styles.textInput}
            multiline
            value={provDiag}
            placeholder="Provisional Diagnosis"
            placeholderTextColor="grey"
            onChangeText={value => setProvDiag(value)}
          />
        </View>
        {/* </View> */}

        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          {/* <Button title="Next" onPress={submitHandler} /> */}

          <TouchableOpacity
            style={styles.button_to}
            onPress={() => navigation.goBack()}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>Previous</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button_to} onPress={handleNext}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>Next</Text>
          </TouchableOpacity>
          {/* </View> */}
        </View>
      </ScrollView>
    </View>
  );
}
