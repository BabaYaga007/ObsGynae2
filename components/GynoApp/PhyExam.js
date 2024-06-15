/* eslint-disable react/react-in-jsx-scope */
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
// import Vitals from './Tables/Vitals';
import {Picker} from '@react-native-picker/picker';
import PatCard from './PatCard';

export default function Physical({navigation, route}) {
  let Presc_data = route.params;

  const [phyExam, setPhyExam] = useState('');
  // const [vitals, setVitals] = useState('');
  const [height, setHeight] = useState(Presc_data.patHeight);
  const [weight, setWeight] = useState('');
  const [bp, setBp] = useState('');
  const [pulse, setPulse] = useState('');
  const [sPS, setSPS] = useState('');

  const [pallor, setPallor] = useState('Absent');
  const [pEdema, setPEdema] = useState('Absent');

  const dropOption1 = [
    {
      id: '1', // acts as primary key, should be unique and non-empty string
      label: 'Absent',
      value: 'Absent',
    },
    {
      id: '2',
      label: 'Present',
      value: 'Present',
    },
  ];

  function handleNext() {
    var vitalsTable;

    vitalsTable = 'Pedal Edema: ' + pEdema;
    vitalsTable = vitalsTable + ' , Pallor: ' + pallor;
    if (sPS !== '') {
      vitalsTable = vitalsTable + ' , Spot Blood Sugar: ' + sPS + 'mg/dl';
    }
    if (weight !== '') {
      vitalsTable = vitalsTable + ' , Weight: ' + weight + 'Kg';
    }
    if (bp !== '') {
      vitalsTable = vitalsTable + ' , Blood Pressure: ' + bp + 'mmHg';
    }
    if (pulse !== '') {
      vitalsTable = vitalsTable + ' , Pulse: ' + pulse + 'Beats/min';
    }

    Presc_data = {
      ...Presc_data,
      phyExam,
      height,
      vitalsTable,
      weight,
      bp,
      pEdema,
      pallor,
      sPS,
      pulse,
    };

    console.log('In PhyExam', Presc_data);

    navigation.navigate('Provisional', Presc_data);
  }

  return (
    <View style={styles.container}>
      {/* <View> */}
      {/* <Text style={styles.heading}>List of Patients</Text> */}
      {/* <Text>Prescriptions</Text> */}
      {/* </View> */}
      <ScrollView style={styles.contentContainer} nestedScrollEnabled={true}>
        {/* <View style={{ marginTop: 0 }}> */}
        <PatCard
          Id={Presc_data.patId}
          Name={Presc_data.patName}
          Age={Presc_data.patAge}
          Num={Presc_data.patPhone}
        />
        {/* </View> */}
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Physical Examination</Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Physical Examination"
            placeholderTextColor="grey"
            value={phyExam}
            onChangeText={value => setPhyExam(value)}
          />
        </View>

        {/* <View style={styles.ques2}>
        <Text style={styles.quesText}>Physical Examination</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Add Favourite"
            placeholderTextColor="grey"
          />
        </View> */}

        {/* <View style={styles.ques2}>
          <Text style={styles.quesText}>Vitals</Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Vitals"
            placeholderTextColor="grey"
            value={vitals}
            onChangeText={value => setVitals(value)}
          />
        </View> */}

        <TouchableOpacity
          style={styles.button_to}
          // onPress={() => navigation.goBack()}
        >
          <Text style={{fontSize: 18, fontWeight: '600'}}>
            Add Favourite Examinations
          </Text>
        </TouchableOpacity>
        <View
          // onPress={() => navigation.navigate('Vitals')}
          style={{
            borderColor: 'blue',
            borderWidth: 2,
            height: 300,
            borderRadius: 10,
            marginVertical: 10,
          }}>
          <View>
            <Text style={styles.quesText}>Vitals</Text>
          </View>

          <ScrollView
            nestedScrollEnabled={true}
            style={{
              marginLeft: 5,
              marginRight: 5,
              backgroundColor: 'white',
              // width: '90%',
              padding: 5,
            }}>
            {/* <View style={styles.ques2}>
              <Text style={styles.quesText}>Height</Text>
              <TextInput
                style={styles.textInput}
                // multiline
                placeholder="In cm"
                placeholderTextColor="grey"
                onChangeText={value => setHeight(value)}
                value={height}
              />
            </View> */}

            <View style={styles.ques2}>
              <Text style={styles.quesText}>Weight</Text>
              <TextInput
                style={styles.textInput}
                // multiline
                placeholder="In Kg"
                placeholderTextColor="grey"
                onChangeText={value => setWeight(value)}
                value={weight}
              />
            </View>

            <View style={styles.ques2}>
              <Text style={styles.quesText}>Blood Pressure(mm Hg)</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Systolic/Diastolic"
                placeholderTextColor="grey"
                onChangeText={value => setBp(value)}
                value={bp}
              />
            </View>

            <View style={styles.ques2}>
              <Text style={styles.quesText}>Pulse</Text>
              <TextInput
                style={styles.textInput}
                // multiline
                placeholder="Beats/minute"
                placeholderTextColor="grey"
                onChangeText={value => setPulse(value)}
                value={pulse}
              />
            </View>

            <View style={styles.ques2}>
              <Text style={styles.quesText}>Spot Blood Sugar</Text>
              <TextInput
                style={styles.textInput}
                // multiline
                placeholder="mg/dL"
                placeholderTextColor="grey"
                onChangeText={value => setSPS(value)}
                value={sPS}
              />
            </View>

            <View style={styles.ques2}>
              <Text style={styles.quesText}>Pallor</Text>
              <Picker
                style={{color: 'black', backgroundColor: 'white'}}
                selectedValue={pallor}
                dropdownIconColor="black"
                onValueChange={(itemValue, itemIndex) => setPallor(itemValue)}>
                {dropOption1.map(item => (
                  <Picker.Item
                    key={item.id}
                    label={item.label}
                    value={item.value}
                  />
                ))}
              </Picker>
            </View>

            <View style={styles.ques2}>
              <Text style={styles.quesText}>Pedal Edema</Text>
              <Picker
                style={{color: 'black', backgroundColor: 'white'}}
                selectedValue={pEdema}
                dropdownIconColor="black"
                onValueChange={(itemValue, itemIndex) => setPEdema(itemValue)}>
                {dropOption1.map(item => (
                  <Picker.Item
                    key={item.id}
                    label={item.label}
                    value={item.value}
                  />
                ))}
              </Picker>
            </View>
          </ScrollView>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          {/* <Button title="Next" onPress={submitHandler} /> */}

          <TouchableOpacity
            style={styles.button_to}
            onPress={() => navigation.goBack()}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>Previous</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button_to} onPress={handleNext}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>Next</Text>
          </TouchableOpacity>
          {/* </View> */}
        </View>
      </ScrollView>
    </View>
  );
}
