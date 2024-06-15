/* eslint-disable prettier/prettier */
import {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {styles} from '../../../assets/Style/styles';

export default function Vitals({navigation}) {
  return (
    <View style={styles.container}>
      {/* <View> */}
      {/* <Text style={styles.heading}>List of Patients</Text> */}
      {/* <Text>Prescriptions</Text> */}
      {/* </View> */}
      <ScrollView style={styles.contentContainer}>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Height</Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="In cm"
            placeholderTextColor="grey"
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Weight</Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="In Kg"
            placeholderTextColor="grey"
          />
        </View>

        {/* <View style={styles.ques2}>
          <Text style={styles.quesText}>SP02</Text>
          <TextInput
            style={styles.textInput}
            placeholder="%"
            placeholderTextColor="grey"
          />
        </View> */}

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Blood Pressure(mm Hg)</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Systolic/Diastolic"
            placeholderTextColor="grey"
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Pulse</Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Beats/minute"
            placeholderTextColor="grey"
          />
        </View>

        {/* <View style={styles.ques2}>
          <Text style={styles.quesText}>Respiratory Rate</Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Breaths/minute"
            placeholderTextColor="grey"
          />
        </View> */}

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Spot Blood Sugar</Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="mg/dL"
            placeholderTextColor="grey"
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Pallor</Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Absent"
            placeholderTextColor="grey"
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Pedal Edema</Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Absent"
            placeholderTextColor="grey"
          />
        </View>

        {/* <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}> */}
        {/* <Button title="Next" onPress={submitHandler} /> */}

        {/* <TouchableOpacity
            style={styles.button_to}
            onPress={() => navigation.goBack()}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>Previous</Text>
          </TouchableOpacity> */}

        {/* <TouchableOpacity
            style={styles.button_to}
            onPress={() => navigation.navigate('Provisional')}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>Save</Text>
          </TouchableOpacity> */}
        {/* </View> */}
        {/* </View> */}
      </ScrollView>
    </View>
  );
}
