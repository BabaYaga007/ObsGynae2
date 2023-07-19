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
import {SearchBar} from 'react-native-elements';

export default function Obstetric({navigation}) {
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

        <View style={styles.ques2}>
          <TextInput
            style={styles.textInput}
            placeholder="Obstetric History"
            placeholderTextColor="grey"
          />
          <Text style={{marginBottom: 5, color: 'grey'}}>
            For any extra notes
          </Text>
        </View>

        <View
          style={{
            borderColor: 'blue',
            borderWidth: 2,
            height: 250,
            borderRadius: 10,
            marginTop: 20,
            justifyContent: 'center',
          }}>
          <TouchableOpacity style={{}}>
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 16,
                color: 'grey',
              }}>
              Table
            </Text>
          </TouchableOpacity>
        </View>

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

          <TouchableOpacity
            style={styles.button_to}
            onPress={() => navigation.navigate('USGReport')}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>Next</Text>
          </TouchableOpacity>
          {/* </View> */}
        </View>
      </ScrollView>
    </View>
  );
}
