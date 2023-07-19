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

export default function Medicines({navigation}) {
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
          <TextInput
            style={styles.textInput}
            placeholder="Medicines"
            placeholderTextColor="grey"
          />
          <Text style={{marginBottom: 5, color: 'black'}}>Generic Name</Text>
        </View>
        {/* </View> */}

        <View style={styles.ques2}>
          <TextInput
            style={styles.textInput}
            placeholder="Dose"
            placeholderTextColor="grey"
          />
          {/* <Text style={{marginBottom: 5, color: 'black'}}>
            Non Printable Notes for Patient
          </Text> */}
        </View>

        <View style={styles.ques2}>
          <TextInput
            style={styles.textInput}
            placeholder="Frequency"
            placeholderTextColor="grey"
          />
          <Text style={{marginBottom: 5, color: 'black'}}>
            Morning Afternoon Evening Night
          </Text>
        </View>

        <View style={styles.ques2}>
          <TextInput
            style={styles.textInput}
            placeholder="Duration"
            placeholderTextColor="grey"
          />
          <Text style={{marginBottom: 5, color: 'black'}}>
            Days Weeks Months
          </Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          {/* <Button title="Next" onPress={submitHandler} /> */}

          <TouchableOpacity
            style={styles.button_to}
            //   onPress={() => navigation.navigate("AddPatient")}
          >
            <Text style={{fontSize: 18, fontWeight: '600'}}>Add Favourite</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button_to}
            //   onPress={() => navigation.navigate("AddPatient")}
          >
            <Text style={{fontSize: 18, fontWeight: '600'}}>Add Medicine</Text>
          </TouchableOpacity>
          {/* </View> */}
        </View>

        <View style={styles.ques2}>
          <TextInput
            style={styles.textInput}
            placeholder="Medicine Advise"
            placeholderTextColor="grey"
          />
          {/* <Text style={{ marginBottom: 5 }}>Generic Name</Text> */}
        </View>

        {/* <View>
          <TouchableOpacity
            style={styles.button_to}
            //   onPress={() => navigation.navigate("AddPatient")}
          >
            <Text style={{ fontSize: 18, fontWeight: "600" }}>
              Upload Investigations
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
            onPress={() => navigation.navigate('InvestAdvice')}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>Next</Text>
          </TouchableOpacity>
          {/* </View> */}
        </View>
      </ScrollView>
    </View>
  );
}
