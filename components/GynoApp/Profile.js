// import {useState} from 'react';
import {
  ScrollView,
  // FlatList,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {styles} from '../../assets/Style/styles';

export default function Profile({navigation}) {
  //   function submitHandler() {
  //     const formData = {};
  //     console.log(formData);
  //   }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>Edit your Profile Here</Text>
        {/* <Text>Prescriptions</Text> */}
      </View>
      <ScrollView style={styles.contentContainer}>
        <View style={styles.ques}>
          <TextInput
            style={styles.textInput}
            placeholder="Full Name"
            placeholderTextColor="grey"
          />
        </View>
        <View style={styles.ques}>
          <TextInput
            style={styles.textInput}
            placeholder="Phone Number"
            placeholderTextColor="grey"
          />
        </View>
        <View style={styles.ques}>
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            placeholderTextColor="grey"
          />
        </View>
        <View style={styles.ques}>
          <TextInput
            style={styles.textInput}
            placeholder="Personal Qualifications"
            placeholderTextColor="grey"
          />
        </View>
        <View style={styles.ques}>
          <TextInput
            style={styles.textInput}
            placeholder="Designation / Hospital Affliation"
            placeholderTextColor="grey"
          />
        </View>
        <View style={styles.ques}>
          <TextInput
            style={styles.textInput}
            placeholder="Clinic Name"
            placeholderTextColor="grey"
          />
        </View>
        <View style={styles.ques}>
          <TextInput
            style={styles.textInput}
            placeholder="Clinic Address"
            placeholderTextColor="grey"
          />
        </View>
        <View style={styles.ques}>
          <TextInput
            style={styles.textInput}
            placeholder="Clinic Ph Number"
            placeholderTextColor="grey"
          />
        </View>
        {/* <View style={styles.ques}>
          <Text>Clinic Logo</Text>
        </View> */}

        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <View>
            <TouchableOpacity
              style={styles.button_to}
              //   onPress={() => navigation.navigate("AddPatient")}
            >
              <Text style={{fontSize: 18, fontWeight: '600'}}>
                Update Profile
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
