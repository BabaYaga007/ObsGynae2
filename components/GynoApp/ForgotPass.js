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

export default function ForgotPass({navigation}) {
  function authenticate() {}

  return (
    <View style={styles.container}>
      {/* <View>
        <Text>Enter your phone number or state medical number</Text>
      </View> */}
      <ScrollView style={styles.contentContainer}>
        <View style={{marginVertical: 20}}>
          <Text style={styles.heading}>
            Please enter the required details so we can send you the link to
            reset the password
          </Text>
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Phone Number</Text>
          <TextInput
            style={styles.textInput}
            placeholder="1234567890"
            multiline
            placeholderTextColor="grey"
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>NMC</Text>
          <TextInput
            style={styles.textInput}
            placeholder="NMC"
            placeholderTextColor="grey"
          />
        </View>

        <TouchableOpacity style={styles.button_to} onPress={authenticate}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>Send Code</Text>
        </TouchableOpacity>

        <View style={{marginVertical: 20}}></View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Enter Code</Text>
          <TextInput
            style={styles.textInput}
            placeholder="123456"
            placeholderTextColor="grey"
          />
        </View>
      </ScrollView>
    </View>
  );
}
