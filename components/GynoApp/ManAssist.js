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
import {Picker} from '@react-native-picker/picker';

// import DateTimePicker from '@react-native-community/datetimepicker';

export default function ManAssist({navigation}) {
  //   function submitHandler() {
  //     const formData = {};
  //     console.log(formData);
  //   }
  // const [Gender, setGender] = useState('Female');
  // // const [date, setDate] = useState(new Date());

  // const dropGender = [
  //   {
  //     id: '1',
  //     label: 'Female',
  //     value: 'Female',
  //   },
  //   {
  //     id: '2',
  //     label: 'Male',
  //     value: 'Male',
  //   },
  //   {
  //     id: '3',
  //     label: 'Other',
  //     value: 'Other',
  //   },
  // ];

  // function onPressGender(value) {
  //   setGender(value);
  // }

  //   const [datePicker, setDatePicker] = useState(false);

  //   const [date, setDate] = useState(new Date());

  //   function showDatePicker() {
  //     setDatePicker(true);
  //   }
  //   function onDateSelected(event, value) {
  //     setDate(value);
  //     setDatePicker(false);
  //   }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>Add Info of Assistant</Text>
        <Text>Prescriptions</Text>
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
        {/* <View style={styles.ques2}>
          <Text style={styles.quesText}>Gender</Text>
          <Picker
            style={{color: 'black', backgroundColor: 'white'}}
            selectedValue={Gender}
            dropdownIconColor="black"
            onValueChange={(itemValue, itemIndex) => setGender(itemValue)}>
            {dropGender.map(item => (
              <Picker.Item
                key={item.id}
                label={item.label}
                value={item.value}
              />
            ))}
          </Picker>
        </View> */}
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

        <TouchableOpacity
          style={styles.button_to}
          // onPress={() => navigation.navigate('Register')}
        >
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>Add Assistant</Text>
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
