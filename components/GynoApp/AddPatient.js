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
import {RadioButton} from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function AddPatient({navigation}) {
  //   function submitHandler() {
  //     const formData = {};
  //     console.log(formData);
  //   }
  const [Gender, setGender] = useState('Female');
  // const [date, setDate] = useState(new Date());

  const GenderRB = [
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

  function onPressGender(value) {
    setGender(value);
  }

  const [datePicker, setDatePicker] = useState(false);

  const [date, setDate] = useState(new Date());

  function showDatePicker() {
    setDatePicker(true);
  }
  function onDateSelected(event, value) {
    setDate(value);
    setDatePicker(false);
  }

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
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Gender</Text>
          <View>
            {GenderRB.map(option => (
              <RadioButton.Item
                // position="leading"
                // labelStyle={{ left: 0 }}
                key={option.id}
                label={option.label}
                value={option.value}
                status={Gender === option.value ? 'checked' : 'unchecked'}
                onPress={() => onPressGender(option.value)}
              />
            ))}
          </View>
          {/* <TextInput
            style={styles.textInput}
            placeholder="Sex = Female"
            placeholderTextColor="grey"
          /> */}
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Phone</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Phone"
            placeholderTextColor="grey"
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Email</Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Email"
            placeholderTextColor="grey"
          />
        </View>
        <View style={styles.ques2}>
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
                  Date of Birth
                </Text>
              </TouchableOpacity>
              <Text style={{color: 'blue', fontSize: 16, textAlign: 'center'}}>
                Set date is : {date.toDateString()}
              </Text>
            </View>
          )}

          {/* <TouchableOpacity
            onPress={displayDatepicker}
            style={styles.button_to}>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>
              Date of Birth
            </Text>
          </TouchableOpacity> */}
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Height</Text>
          <TextInput
            style={styles.textInput}
            placeholder="In cm"
            placeholderTextColor="grey"
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

        <TouchableOpacity
          style={styles.button_to}
          // onPress={() => navigation.navigate('Register')}
        >
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
