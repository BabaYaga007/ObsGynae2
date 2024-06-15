/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {useState, useEffect} from 'react';
import {
  ScrollView,
  FlatList,
  View,
  Text,
  TextInput,
  Button,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {styles} from '../../../assets/Style/styles';
import {Picker} from '@react-native-picker/picker';
import SetObs from '../DBfiles/SetObs';
import GetObs from '../DBfiles/GetObs';
import {useAppContext} from '../../AppContext';
import {LogBox} from 'react-native';

export default function ObsteTable({navigation, route}) {
  useEffect(() => {
    LogBox.ignoreLogs([
      'VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead.',
    ]);
  }, []);

  const {docNmc, clinicId} = useAppContext();

  const [parity, setParity] = useState('Term');
  const [mode_birth, setMBirth] = useState('-');
  const [outcome, setOutcome] = useState('-');
  const [baby, setBaby] = useState('-');

  const [gravida, setGravida] = useState();
  const [birth_year, setYear] = useState();
  const [birth_wt, setBirthWt] = useState('');
  const [comments, setComments] = useState('');

  const [refresh, setRefresh] = useState(false);

  const dropOption1 = [
    {
      id: '1', // acts as primary key, should be unique and non-empty string
      label: 'Term',
      value: 'Term',
    },
    {
      id: '2',
      label: 'Preterm',
      value: 'Preterm',
    },
    {
      id: '3',
      label: 'Abortion',
      value: 'Abortion',
    },
    {
      id: '4',
      label: 'Ectopic',
      value: 'Ectopic',
    },
  ];

  const dropOption2 = [
    {
      id: '1', // acts as primary key, should be unique and non-empty string
      label: '-',
      value: '-',
    },
    {
      id: '2', // acts as primary key, should be unique and non-empty string
      label: 'FTNVD',
      value: 'FTNVD',
    },
    {
      id: '3',
      label: 'Instrumental Vaginal Delivery',
      value: 'Instrumental Vaginal Delivery',
    },
    {
      id: '4',
      label: 'LSCS',
      value: 'LSCS',
    },
  ];

  const dropOption3 = [
    {
      id: '1', // acts as primary key, should be unique and non-empty string
      label: '-',
      value: '-',
    },
    {
      id: '2', // acts as primary key, should be unique and non-empty string
      label: 'Livebirth',
      value: 'Livebirth',
    },
    {
      id: '3',
      label: 'Stillbirth',
      value: 'Stillbirth',
    },
    {
      id: '4',
      label: 'Abortion',
      value: 'Abortion',
    },
    {
      id: '5',
      label: 'Ectopic Pregnancy',
      value: 'Ectopic Pregnancy',
    },
  ];

  const dropOption4 = [
    {
      id: '1', // acts as primary key, should be unique and non-empty string
      label: '-',
      value: '-',
    },
    {
      id: '2', // acts as primary key, should be unique and non-empty string
      label: 'Female',
      value: 'Female',
    },
    {
      id: '3',
      label: 'Male',
      value: 'Male',
    },
  ];

  let Presc_data = route.params;

  const [obsData, setObsData] = useState([]);

  useEffect(() => {
    // This code will run once when the component mounts
    GetObs(docNmc, Presc_data.patId)
      .then(result => {
        setObsData(result);
        console.log('GetObsData', result);
      })
      .catch(error => {
        console.log('Error fetching ObsData in Obstetric ', error);
      });
  }, [refresh]);

  function addRow() {
    const obsInfo = {
      patient_id: Presc_data.patId,
      doc_nmc: docNmc,
      clinic_id: clinicId,
      parity,
      mode_birth,
      baby,
      outcome,
      gravida,
      birth_year,
      birth_wt,
      comments,
    };

    console.log('Setting Obs Data');

    SetObs(obsInfo)
      .then(() => {
        // Refresh obsData by toggling the refresh state
        setRefresh(prev => !prev);
        resetForm();
      })
      .catch(error => {
        console.log('Error setting Obs Data in Obstetric ', error);
      });

    // navigation.;
    resetForm();
  }

  const resetForm = () => {
    setParity('Term');
    setMBirth('-');
    setBaby('-');
    setOutcome('-');
    setGravida();
    setBirthWt();
    setYear('');
    setComments('');
  };

  function handleNext() {
    let obsDataX = Array.isArray(obsData) ? obsData : [obsData];

    Presc_data = {
      ...Presc_data,
      parity,
      mode_birth,
      outcome,
      baby,
      gravida,
      birth_year,
      birth_wt,
      comments,
      obsDataX,
    };

    console.log('In Obstetric Table', Presc_data);

    navigation.navigate('AnteTable', Presc_data);
  }

  const handleObs = obs_data => {
    navigation.navigate('PreviewObs', obs_data);
  };

  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      {/* <View> */}
      {/* <Text style={styles.heading}>List of Patients</Text> */}
      {/* <Text>Prescriptions</Text> */}
      {/* </View> */}
      <ScrollView style={styles.contentContainer} nestedScrollEnabled={true}>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Gravida</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Number"
            placeholderTextColor="grey"
            inputMode="numeric"
            value={gravida}
            onChangeText={value => setGravida(value)}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Birth Year</Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Year"
            placeholderTextColor="grey"
            inputMode="numeric"
            value={birth_year}
            onChangeText={value => setYear(value)}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Parity</Text>
          <Picker
            style={{color: 'black', backgroundColor: 'white'}}
            selectedValue={parity}
            dropdownIconColor="black"
            onValueChange={(itemValue, itemIndex) => setParity(itemValue)}>
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
          <Text style={styles.quesText}>Mode of Birth</Text>
          <Picker
            style={{color: 'black', backgroundColor: 'white'}}
            selectedValue={mode_birth}
            dropdownIconColor="black"
            onValueChange={(itemValue, itemIndex) => setMBirth(itemValue)}>
            {dropOption2.map(item => (
              <Picker.Item
                key={item.id}
                label={item.label}
                value={item.value}
              />
            ))}
          </Picker>
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Outcome</Text>
          <Picker
            style={{color: 'black', backgroundColor: 'white'}}
            selectedValue={outcome}
            dropdownIconColor="black"
            onValueChange={(itemValue, itemIndex) => setOutcome(itemValue)}>
            {dropOption3.map(item => (
              <Picker.Item
                key={item.id}
                label={item.label}
                value={item.value}
              />
            ))}
          </Picker>
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Baby</Text>
          <Picker
            style={{color: 'black', backgroundColor: 'white'}}
            selectedValue={baby}
            dropdownIconColor="black"
            onValueChange={(itemValue, itemIndex) => setBaby(itemValue)}>
            {dropOption4.map(item => (
              <Picker.Item
                key={item.id}
                label={item.label}
                value={item.value}
              />
            ))}
          </Picker>
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Birth Weight</Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="In gm"
            inputMode="numeric"
            placeholderTextColor="grey"
            value={birth_wt}
            onChangeText={value => setBirthWt(value)}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Comments</Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Comments"
            placeholderTextColor="grey"
            value={comments}
            onChangeText={value => setComments(value)}
          />
        </View>

        <View
          style={{
            borderColor: 'blue',
            borderWidth: 2,
            height: 250,
            borderRadius: 10,
            marginVertical: 6,
          }}>
          <View style={{overflow: 'scroll'}}>
            <Text style={styles.quesText}>Obstetric Details</Text>
            {Array.isArray(obsData) && (
              <FlatList
                nestedScrollEnabled={true}
                data={obsData}
                keyExtractor={item => item.presc_id}
                contentContainerStyle={{
                  width: screenWidth * 0.8,
                  paddingTop: 5,
                  // borderColor: 'black',
                  // borderWidth: 1,
                  alignSelf: 'center', // Align the FlatList to the center horizontally
                }}
                renderItem={({item}) => {
                  let par = item.parity;
                  let gra = item.gravida;
                  let bab = item.baby;
                  let out = item.outcome;
                  // console.log('Flatlist = ', item);
                  return (
                    <TouchableOpacity
                      style={styles2.presc}
                      onPress={() => handleObs(item)}>
                      <Text style={styles2.presc_text}>
                        {gra + ' | ' + par + ' | ' + bab + ' | ' + out}
                      </Text>
                    </TouchableOpacity>
                  );
                }}
              />
            )}
          </View>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          {/* <Button title="Next" onPress={submitHandler} /> */}

          <TouchableOpacity style={styles.button_to} onPress={addRow}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>Add Row</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button_to} onPress={handleNext}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>Next</Text>
          </TouchableOpacity>
          {/* </View> */}
        </View>
        <View style={{marginVertical: 5}}></View>
      </ScrollView>
    </View>
  );
}

const styles2 = StyleSheet.create({
  presc: {
    height: 50,
    marginHorizontal: 5,
    marginTop: 5,
    backgroundColor: '#a5adb8',
    borderRadius: 5,
    justifyContent: 'center',
  },
  presc_text: {
    color: 'black',
    marginLeft: 10,
  },
});
