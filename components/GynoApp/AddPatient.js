/* eslint-disable prettier/prettier */
import {useEffect, useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Button,
  Alert,
} from 'react-native';
import {styles} from '../../assets/Style/styles';
import {Picker} from '@react-native-picker/picker';

import DateTimePicker from '@react-native-community/datetimepicker';

import {useAppContext} from '../AppContext';
import SetPat from './DBfiles/SetPat';

export default function AddPatient({navigation, route}) {
  const submitHandler = () => {
    addPat();

    //clear all the variable states
    clearState();

    navigation.navigate('Dashboard');
  };

  const {docNmc, setDocNmc, docName, setDocName, clinicId, setClinicId} =
    useAppContext();
  // const [date, setDate] = useState(new Date());

  const dropGender = [
    {
      id: '1',
      label: 'Female',
      value: 'Female',
    },
    {
      id: '2',
      label: 'Male',
      value: 'Male',
    },
    {
      id: '3',
      label: 'Other',
      value: 'Other',
    },
  ];

  const [datePicker, setDatePicker] = useState(false);

  const [date, setDate] = useState(new Date());

  function showDatePicker() {
    setDatePicker(true);
  }
  function onDateSelected(event, value) {
    setDate(value);
    setDatePicker(false);
  }

  function errorCB(err) {
    console.log('ha ha huhuSQL Error: ' + err.message);
  }

  function openCB() {
    console.log('Database OPENED');
  }

  // DB Related variables
  //  var db = openDatabase({name: 'OBGYNdb.db'});
  let [pat_name, setPatName] = useState('');
  let [pat_phone, setPatPhone] = useState('');
  let [pat_email, setPatEmail] = useState('');
  let [pat_height, setPatHeight] = useState('');
  const [pat_gender, setPatGender] = useState('Female');
  let pat_dob = date.toDateString();
  // let status = 1;

  const clearState = () => {
    setPatName('');
    setPatEmail('');
    setPatPhone('');
    setPatHeight('');
    // setDate('');
    // clinic_id = '';
    // doc_nmc = '';
  };

  let addPat = () => {
    // let [email_id, setEmailId] = useState('');
    console.log(
      docNmc,
      clinicId,
      pat_name,
      pat_gender,
      pat_phone,
      pat_email,
      pat_dob,
      pat_height,
    );

    if (!pat_name) {
      alert('Please fill Patient name');
      return;
    }
    if (!pat_phone) {
      alert('Please fill Patient Contact Number');
      return;
    }

    if (!pat_email) {
      alert("Please fill Patient's Email");
      return;
    }
    if (!pat_dob) {
      alert("Please fill Patient's  Date of Birth");
      return;
    }

    if (!pat_height) {
      alert("Please fill Patient's Height");
      return;
    }

    const patInfo = {
      docNmc,
      clinicId,
      pat_name,
      pat_gender,
      pat_phone,
      pat_email,
      pat_height,
      pat_dob,
    };

    SetPat(patInfo);

    // db.transaction(function (txn) {
    //   txn.executeSql(
    //     'INSERT INTO TblPatient(doc_nmc, clinic_id, pat_name, pat_gender, pat_phone, pat_email, pat_height, pat_dob) VALUES (?,?,?,?,?,?,?,?)',
    //     [
    //       docNmc,
    //       clinicId,
    //       // '2',
    //       pat_name,
    //       pat_gender,
    //       pat_phone,
    //       pat_email,
    //       pat_height,
    //       pat_dob,
    //     ],
    //     (txn, results) => {
    //       console.log('Patient Records inserted');
    //       Alert.alert('New Patient Added');
    //     },
    //     errorCB,
    //   );
    // });
  };

  return (
    <View style={styles.container}>
      <View>
        {/* <Text style={styles.heading}>Add Info of Patient</Text> */}
        {/* <Text>Prescriptions</Text> */}
      </View>
      {/* <View>
        <Text>Enter your phone number or state medical number</Text>
      </View> */}
      <ScrollView style={styles.contentContainer}>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Name</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Name"
            multiline
            placeholderTextColor="grey"
            onChangeText={pat_name => setPatName(pat_name)}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Gender</Text>
          <Picker
            style={{color: 'black', backgroundColor: 'white'}}
            selectedValue={pat_gender}
            dropdownIconColor="black"
            onValueChange={(itemValue, itemIndex) => setPatGender(itemValue)}>
            {dropGender.map(item => (
              <Picker.Item
                key={item.id}
                label={item.label}
                value={item.value}
              />
            ))}
          </Picker>
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Phone</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Phone"
            inputMode="numeric"
            placeholderTextColor="grey"
            onChangeText={pat_phone => setPatPhone(pat_phone)}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Email</Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Email"
            placeholderTextColor="grey"
            onChangeText={pat_email => setPatEmail(pat_email)}
          />
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
                  Date of Birth
                </Text>
              </TouchableOpacity>
              <Text style={{color: 'blue', fontSize: 16, textAlign: 'center'}}>
                Set date is : {date.toDateString()}
              </Text>
            </View>
          )}
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Height</Text>
          <TextInput
            style={styles.textInput}
            placeholder="In cm"
            inputMode="numeric"
            placeholderTextColor="grey"
            onChangeText={pat_height => setPatHeight(pat_height)}
          />
        </View>

        {/* <View
          style={[
            styles.ques2,
            {
              flex: 3,
              flexDirection: 'column',
              alignContent: 'space-between',
              // width: "50%",
            },
          ]}>
          <Text style={styles.quesText}>Image</Text>
          <Image
            style={{flex: 1, width: 30, height: 30}}
            source={require('../../assets/icons/camera.png')}
          />
        </View> */}

        <TouchableOpacity style={styles.button_to} onPress={submitHandler}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>Add Patient</Text>
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
