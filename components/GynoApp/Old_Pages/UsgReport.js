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
import {styles} from '../../../assets/Style/styles';
import PatCard from '../PatCard';

export default function UsgReport({navigation, route}) {
  const [usg, setUsg] = useState('');

  let Presc_data = route.params;

  function handleNext() {
    Presc_data = {
      ...Presc_data,
      usgReport: usg,
    };

    console.log('In USG Report', Presc_data);

    // () => navigation.navigate('AnteMonit')
    navigation.navigate('USGTable', Presc_data);
  }

  return (
    <View style={styles.container}>
      {/* <View> */}
      {/* <Text style={styles.heading}>List of Patients</Text> */}
      {/* <Text>Prescriptions</Text> */}
      {/* </View> */}
      <ScrollView style={styles.contentContainer}>
        <PatCard
          Id={Presc_data.patId}
          Name={Presc_data.patName}
          Age={Presc_data.patAge}
          Num={Presc_data.patPhone}
        />

        <View style={styles.ques2}>
          <Text style={styles.quesText}>USG Report</Text>
          <TextInput
            style={styles.textInput}
            placeholder="For any extra notes"
            placeholderTextColor="grey"
            value={usg}
            onChangeText={value => setUsg(value)}
          />
        </View>

        <TouchableOpacity
          onPress={handleNext}
          style={{
            borderColor: 'blue',
            borderWidth: 2,
            height: 250,
            borderRadius: 10,
            marginVertical: 20,
            justifyContent: 'center',
          }}>
          {/* <View style={{}}>
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 16,
              }}>
              Table
            </Text>
          </View> */}
        </TouchableOpacity>

        {/* <View>
          <TouchableOpacity
            style={styles.button_to}
            //   onPress={() => navigation.navigate("AddPatient")}
          >
            <Text style={{ fontSize: 18, fontWeight: "600" }}>
              Send Prescription
            </Text>
          </TouchableOpacity>
        </View> */}
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
