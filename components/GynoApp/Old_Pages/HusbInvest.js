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
import {SearchBar} from 'react-native-elements';
import PatCard from '../PatCard';

export default function HusbInvest({navigation, route}) {
  const [husbInvNotes, setNotes] = useState();

  let Presc_data = route.params;

  function handleNext() {
    Presc_data = {
      ...Presc_data,
      husbInvNotes,
    };

    console.log('In HusbInvest', Presc_data);

    navigation.navigate('PhyExam', Presc_data);
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
          <Text style={styles.quesText}>Husband Investigations</Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="For any extra notes"
            placeholderTextColor="grey"
            value={husbInvNotes}
            onChangeText={value => setNotes(value)}
          />
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('HusbPartner', Presc_data)}
          style={{
            borderColor: 'blue',
            borderWidth: 2,
            height: 250,
            borderRadius: 10,
            marginVertical: 20,
            justifyContent: 'center',
          }}>
          <View style={{}}>
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 16,
                color: 'black',
              }}>
              Table
            </Text>
          </View>
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
