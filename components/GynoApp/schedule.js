/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
import {styles} from '../../assets/Style/styles';

import DateTimePicker from '@react-native-community/datetimepicker';
import {useAppContext} from '../AppContext';
import SetAppoint from './DBfiles/SetAppoint';
// import {SetAppoint} from './DBfiles/SetAppoint';

// import {Upcoming} from './Appointment';

export default function Schedule({navigation}) {
  const {docNmc} = useAppContext();

  const handleSubmit = () => {
    schedulePat();

    // Calling the Upcoming component so it loads only when we submit the schedule
    // Upcoming({navigation}).AppointUser();

    //clear all the variable states
  };

  // Declared for Date Picker
  const [datePicker, setDatePicker] = useState(false);

  const [date, setDate] = useState(new Date());

  function showDatePicker() {
    setDatePicker(true);
  }
  function onDateSelected(event, value) {
    setDate(value);
    setDatePicker(false);
  }
  // Declared for Time Picker
  const [timePicker, setTimePicker] = useState(false);

  const [time, setTime] = useState(new Date());

  function showTimePicker() {
    setTimePicker(true);
  }
  function onTimeSelected(event, value) {
    setTime(value);
    setTimePicker(false);
  }

  // Declared for DOB Picker
  const [datePickerDob, setDatePickerDob] = useState(false);

  const [dateDob, setDateDob] = useState(new Date());

  function showDatePickerDob() {
    setDatePickerDob(true);
  }
  function onDateSelectedDob(event, value) {
    setDateDob(value);
    setDatePickerDob(false);
  }

  // DB Related variables
  // var db = openDatabase({name: 'OBGYNdb'});

  // let [clinic_id, setClinicId] = useState('A001');
  let [pat_name, setPatName] = useState('');
  let [pat_phone, setPatPhone] = useState('');
  // let [pat_dob, setPatDob] = useState('');
  let pat_dob = dateDob.toDateString();
  // let sch_date = date.toDateString();
  // let sch_time = time.toTimeString();
  const sch_date = date.toISOString().split('T')[0];
  const sch_time = time.toTimeString().split(' ')[0];
  let status = 1; // 1 is for Upcoming , 2 for Past

  const clearState = () => {
    setPatName('');
    setPatPhone('');
    setDate(new Date());
    setTime(new Date());
    setDateDob(new Date());
  };

  function schedulePat() {
    // let [email_id, setEmailId] = useState('');

    if (!pat_name) {
      alert('Please fill Patient name');
      return;
    }
    if (!pat_phone) {
      alert('Please fill Patient Contact Number');
      return;
    }

    if (!pat_dob) {
      alert("Please fill Patient's Dob");
      return;
    }
    if (!sch_date) {
      alert('Please fill Appointment Date');
      return;
    }

    if (!sch_time) {
      alert('Please fill Appointment Time');
      return;
    }

    console.log(
      'Inside Scheule JS ',
      docNmc,
      pat_name,
      pat_phone,
      pat_dob,
      sch_date,
      sch_time,
      status,
    );

    // var birthdate = Date.parse(pat_dob.toDateString());
    var birthdate = Date.parse(pat_dob);
    var cur = new Date();
    var diff = cur - birthdate; // This is the difference in milliseconds
    var pat_age = Math.floor(diff / 31557600000); // Divide by 1000*60*60*24*365.25

    let schInfo = {
      docNmc,
      pat_name,
      pat_phone,
      pat_dob,
      sch_date,
      sch_time,
      pat_age,
      status,
    };

    // SetAppoint(schInfo);
    SetAppoint(schInfo);
    // db.transaction(
    //   function (txn) {
    //     console.log(
    //       'Holy Achint ' +
    //         'pat_name ' +
    //         pat_name +
    //         ' pat_phone :' +
    //         pat_phone +
    //         ' pat_age :' +
    //         pat_age +
    //         ' pat_dob ' +
    //         pat_dob +
    //         ' sch_date ' +
    //         sch_date +
    //         ' status ' +
    //         status +
    //         ' sch_time ' +
    //         sch_time,
    //     );

    //     txn.executeSql(
    //       'INSERT INTO TblAppointment(doc_nmc, pat_name, pat_phone, pat_age, pat_dob, sch_date, sch_time, status) VALUES (?,?,?,?,?,?,?,?)',
    //       [
    //         docNmc,
    //         pat_name,
    //         pat_phone,
    //         pat_age,
    //         pat_dob,
    //         sch_date,
    //         sch_time,
    //         status,
    //       ],
    //       function (txn, results) {
    //         console.log('Results Appointment', results.rowsAffected);
    //         if (results.rowsAffected > 0) {
    //           console.log('Alert here Appointment');
    //           alert(
    //             'Appointment Scheduled Successfully',
    //             [
    //               {
    //                 text: 'Ok',
    //               },
    //             ],
    //             {cancelable: false},
    //           );
    //         } else {
    //           console.log(
    //             'Appointment scheduling failed ' +
    //               'pat_name ' +
    //               pat_name +
    //               ' pat_phone :' +
    //               pat_phone +
    //               ' pat_age :' +
    //               pat_age +
    //               ' pat_dob ' +
    //               pat_dob +
    //               ' sch_date ' +
    //               sch_date +
    //               ' status ' +
    //               status +
    //               ' sch_time ' +
    //               sch_time,
    //           );
    //         }
    //       },
    //       function (error) {
    //         console.log('Error: Appointment ' + error.message);
    //       },
    //     );
    //   },
    //   function (error) {
    //     console.log('Transaction error: ' + error.message);
    //   },
    // );

    clearState();

    navigation.navigate('Dashboard');
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.contentContainer}>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Name</Text>
          <TextInput
            style={styles.textInput}
            value={pat_name}
            multiline
            // placeholderTextColor="grey"
            onChangeText={pat_name => setPatName(pat_name)}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Phone Number</Text>
          <TextInput
            style={styles.textInput}
            value={pat_phone}
            inputMode="numeric"
            // placeholderTextColor="grey"
            onChangeText={pat_phone => setPatPhone(pat_phone)}
          />
        </View>

        <View style={styles.ques}>
          {datePickerDob && (
            <DateTimePicker
              value={dateDob}
              mode={'date'}
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              is24Hour={true}
              onChange={onDateSelectedDob}
              // style={styleSheet.datePicker}
            />
          )}

          {!datePickerDob && (
            <View style={{margin: 10}}>
              <TouchableOpacity
                onPress={showDatePickerDob}
                style={styles.button_to}>
                <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                  Date of Birth
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  color: 'blue',
                  fontSize: 16,
                  textAlign: 'center',
                }}>
                Set date is : {dateDob.toDateString()}
              </Text>
            </View>
          )}
        </View>

        <View style={styles.ques}>
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
                  Next Appointment Date
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  color: 'blue',
                  fontSize: 16,
                  textAlign: 'center',
                }}>
                Set date is : {date.toDateString()}
              </Text>
            </View>
          )}
        </View>

        <View style={styles.ques}>
          {timePicker && (
            <DateTimePicker
              value={time}
              mode={'time'}
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              is24Hour={true}
              onChange={onTimeSelected}
              // style={styleSheet.datePicker}
            />
          )}

          {!timePicker && (
            <View style={{margin: 10}}>
              <TouchableOpacity
                onPress={showTimePicker}
                style={styles.button_to}>
                <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                  Set Appointment Time
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  color: 'blue',
                  fontSize: 16,
                  textAlign: 'center',
                }}>
                Set time is : {time.toTimeString()}
              </Text>
            </View>
          )}
        </View>

        <TouchableOpacity style={styles.button_to} onPress={handleSubmit}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>
            Schedule Appointment
          </Text>
        </TouchableOpacity>

        {/* <View style={styles.naviButton}>

          <Button
            title="Add Patient"
            // onPress={() => navigation.navigate("Antenatal")}
          />
        </View> */}
      </ScrollView>
    </View>
  );
}
