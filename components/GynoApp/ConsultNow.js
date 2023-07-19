/* eslint-disable prettier/prettier */
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
// import FlashMessage, {showMessage} from "react-native-flash-message";
import FlashMessage, {
  showMessage,
  hideMessage,
} from 'react-native-flash-message';

export default function ConsultNow({navigation}) {
  return (
    <View style={styles.container}>
      {/* <View> */}
      {/* <Text style={styles.heading}>List of Patients</Text> */}
      {/* <Text>Prescriptions</Text> */}
      {/* </View> */}
      <ScrollView style={styles.contentContainer}>
        {/* <View style={{ marginTop: 0 }}> */}
        <TouchableOpacity
          style={{
            // borderWidth: 2,
            // borderColor: "grey",
            marginVertical: 10,
            borderRadius: 20,
            backgroundColor: '#bdf0d2',
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
            <Image
              source={require('../../assets/icons/female.png')}
              style={{
                height: 40,
                width: 40,
                marginHorizontal: 20,
                justifyContent: 'center',
                alignSelf: 'center',
              }}
            />
            <View style={{alignSelf: 'center'}}>
              <Text style={{fontSize: 22, color: 'grey'}}>
                Achint Srivastava
              </Text>
              <Text style={{fontSize: 18, color: 'grey'}}>Age: 24 years</Text>
              <Text style={{fontSize: 18, color: 'grey'}}>
                Number: 1234567890
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        {/* </View> */}

        {/* <View style={{ marginTop: 15 }}> */}
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Presenting Complaints</Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Presenting Complaints"
            placeholderTextColor="grey"
          />
        </View>
        {/* </View> */}

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Past and Family History</Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Medical History"
            placeholderTextColor="grey"
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Non Printable notes about Patient</Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Notes"
            placeholderTextColor="grey"
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Investigation Results</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Investigations Record"
            placeholderTextColor="grey"
          />
        </View>

        {/* <View>
          <TouchableOpacity></TouchableOpacity>
        </View> */}

        <View>
          <TouchableOpacity
            style={styles.button_to}
            onPress={() =>
              showMessage({
                message: 'Investigations uploaded',
                type: 'info',
              })
            }>
            <Text style={styles.button_to_text}>Upload Investigations</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          {/* <Button title="Next" onPress={submitHandler} /> */}

          <TouchableOpacity
            style={styles.button_to}
            onPress={() => navigation.goBack()}>
            <Text style={styles.button_to_text}>Previous</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button_to}
            onPress={() => navigation.navigate('Prescription')}>
            <Text style={styles.button_to_text}>Next</Text>
          </TouchableOpacity>
          {/* </View> */}
        </View>
        <FlashMessage
          position="bottom"
          floating="true"
          style={{backgroundColor: 'grey'}}
          titleStyle={{fontSize: 20}}
          duration={2000}
        />
      </ScrollView>
    </View>
  );
}
