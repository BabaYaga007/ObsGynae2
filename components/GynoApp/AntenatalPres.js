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
import DateTimePicker from '@react-native-community/datetimepicker';
import {SearchBar} from 'react-native-elements';
import PatCard from './PatCard';

export default function AntePres({navigation, route}) {
  const [datePicker, setDatePicker] = useState(false);

  const [date, setDate] = useState(new Date());

  function showDatePicker() {
    setDatePicker(true);
  }
  function onDateSelected(event, value) {
    setDate(value);
    setDatePicker(false);
  }
  let Presc_data = route.params;

  const handleNext = () => {
    Presc_data = {
      ...Presc_data,
      lmp: date.toDateString(),
      // lmp: date,
    };

    console.log('In Antenatal Prescription', Presc_data);

    navigation.navigate('Obstetric', Presc_data);
  };

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

        <View style={styles.ques}>
          <Text style={styles.quesText}>Choose LMP Date</Text>

          {/* <View style={styles.ques}> */}
          {/* <Text style={styles.quesText}>Date of Birth</Text> */}
          {datePicker && (
            <DateTimePicker
              value={date}
              mode={'date'}
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              is24Hour={true}
              onChange={onDateSelected}
              // style={styleSheet.datePicker}
            />
          )}

          {!datePicker && (
            <View style={{margin: 10}}>
              <TouchableOpacity
                onPress={showDatePicker}
                style={styles.button_to}>
                <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                  Choose date
                </Text>
              </TouchableOpacity>
              <Text style={{color: 'blue', fontSize: 16, textAlign: 'center'}}>
                Set LMP date is : {date.toDateString()}
              </Text>
            </View>
          )}
          {/* </View> */}
        </View>

        <View>
          <TouchableOpacity
            style={styles.button_to}
            onPress={() => navigation.navigate('Obstetric', Presc_data)}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>
              Obstetric History
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.button_to}
            onPress={() => navigation.navigate('AnteTable', Presc_data)}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>
              Antenatal Investigations
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.button_to}
            onPress={() => navigation.navigate('USGTable', Presc_data)}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>USG Reports</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.button_to}
            onPress={() => navigation.navigate('AnteMonit', Presc_data)}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>
              Antenatal Monitoring
            </Text>
          </TouchableOpacity>
        </View>
        {/* <View>
          <TouchableOpacity
            style={styles.button_to}
            //   onPress={() => navigation.navigate("AddPatient")}
          >
            <Text style={{fontSize: 18, fontWeight: '600'}}>
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
