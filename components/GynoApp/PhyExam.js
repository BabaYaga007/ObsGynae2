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

export default function Physical({navigation}) {
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
            placeholder="Physical Examination"
            placeholderTextColor="grey"
          />
        </View>

        <View style={styles.ques2}>
          <TextInput
            style={styles.textInput}
            placeholder="Add Favourite"
            placeholderTextColor="grey"
          />
        </View>

        <View style={styles.ques2}>
          <TextInput
            style={styles.textInput}
            placeholder="Vitals"
            placeholderTextColor="grey"
          />
        </View>

        {/* <View style={styles.ques2}>
          <TextInput style={styles.textInput} placeholder="Surgical Record" />
        </View> */}

        <View
          style={{
            borderColor: 'blue',
            borderWidth: 2,
            height: 250,
            borderRadius: 10,
            marginVertical: 10,
          }}>
          <TouchableOpacity>
            <Text style={{alignSelf: 'center', fontSize: 16, color: 'black'}}>
              Vitals Table
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          {/* <Button title="Next" onPress={submitHandler} /> */}

          <TouchableOpacity
            style={styles.button_to}
            onPress={() => navigation.goBack()}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>Previous</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button_to}
            onPress={() => navigation.navigate('Provisional')}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>Next</Text>
          </TouchableOpacity>
          {/* </View> */}
        </View>
      </ScrollView>
    </View>
  );
}
