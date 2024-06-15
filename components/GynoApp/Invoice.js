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

export default function Invoice({navigation, route}) {
  const [amount, setAmount] = useState('');
  const [procedure, setProcedure] = useState('');
  const [cash, setCash] = useState('');

  let Presc_data = route.params;

  function handleNext() {
    console.log('In Invoice', Presc_data);

    navigation.navigate('Dashboard');
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
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Amount</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Amount"
            placeholderTextColor="grey"
            value={amount}
            onChangeText={value => setAmount(value)}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Consultation / Procedure</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Consultation / Procedure"
            multiline
            placeholderTextColor="grey"
            value={procedure}
            onChangeText={value => setProcedure(value)}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Cash / Credit</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Cash / Credit"
            placeholderTextColor="grey"
            value={cash}
            onChangeText={value => setCash(value)}
          />
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          {/* <Button title="Next" onPress={submitHandler} /> */}
          <View>
            <TouchableOpacity
              style={styles.button_to}
              onPress={() => navigation.goBack()}>
              <Text style={{fontSize: 18, fontWeight: '600'}}>Back</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.button_to} onPress={handleNext}>
              <Text style={{fontSize: 18, fontWeight: '600'}}>
                Send Invoice
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
