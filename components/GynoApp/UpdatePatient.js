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
} from 'react-native';
import {styles} from '../../assets/Style/styles';
import {Picker} from '@react-native-picker/picker';

import DateTimePicker from '@react-native-community/datetimepicker';

import {useAppContext} from '../AppContext';
import UpdatePat from './DBfiles/UpdatePat';

export default function UpdatePatient({navigation, route}) {
  const {docNmc, clinicId} = useAppContext();
  // console.log(docNmc);

  let PatInfo = route.params;

  const submitHandler = () => {
    UpPat();

    //clear all the variable states
    // clearState();

    // navigation.navigate('ListPatient');
    navigation.goBack();
  };

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

  let [pat_name, setPatName] = useState(PatInfo.pat_name);
  let [pat_phone, setPatPhone] = useState(PatInfo.pat_phone.toString());

  let [pat_email, setPatEmail] = useState(PatInfo.pat_email || '');
  let [pat_height, setPatHeight] = useState(
    PatInfo.pat_height?.toString() || '',
  );
  let [pat_gender, setPatGender] = useState(PatInfo.pat_gender || 'Female');

  // let [pat_email, setPatEmail] = useState('');
  // let [pat_height, setPatHeight] = useState('');
  // const [pat_gender, setPatGender] = useState('Female');

  // if ('pat_height' in PatInfo) {
  //   // setPatEmail(PatInfo.pat_email);
  //   setPatHeight(PatInfo.pat_height.toString());
  //   // setPatGender(PatInfo.pat_gender);
  // }

  // console.log(PatInfo.pat_dob);
  // console.log(new Date(PatInfo.pat_dob));

  const [date, setDate] = useState(new Date(PatInfo.pat_dob));
  let pat_dob = date.toDateString();

  const [datePicker, setDatePicker] = useState(false);

  function showDatePicker() {
    setDatePicker(true);
  }
  function onDateSelected(event, value) {
    setDate(value);
    setDatePicker(false);
  }
  // let status = 1;

  let UpPat = () => {
    // console.log(docNmc);
    setPatPhone(Number(pat_phone));
    setPatHeight(Number(pat_height));
    // console.log(typeof pat_phone, typeof pat_height);

    console.log(
      docNmc,
      // clinicId,
      PatInfo.patient_id,
      pat_name,
      pat_gender,
      pat_email,
      pat_dob,
      pat_height,
    );

    const upInfo = {
      docNmc,
      clinicId,
      patient_id: PatInfo.patient_id,
      pat_name,
      pat_gender,
      pat_email,
      pat_dob,
      pat_height,
    };

    UpdatePat(upInfo);
  };

  return (
    <View style={styles.container}>
      <View></View>
      <ScrollView style={styles.contentContainer}>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>ID</Text>
          <TextInput
            style={styles.textInput}
            placeholder="ID"
            readOnly={true}
            value={PatInfo.patient_id?.toString()}
            placeholderTextColor="grey"
            // onChangeText={pat_name => setPatName(pat_name)}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Name</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Name"
            multiline
            value={pat_name}
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
            value={pat_phone}
            readOnly={true}
            placeholderTextColor="grey"
            // onChangeText={pat_phone => setPatPhone(pat_phone)}
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Email</Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Email"
            value={pat_email}
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
            placeholderTextColor="grey"
            value={pat_height}
            onChangeText={pat_height => setPatHeight(pat_height)}
          />
        </View>

        <TouchableOpacity style={styles.button_to} onPress={submitHandler}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>Update Patient</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
