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
  Platform,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {styles} from '../../../assets/Style/styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Picker} from '@react-native-picker/picker';
import PatCard from '../PatCard';
import {LogBox} from 'react-native';
import {useAppContext} from '../../AppContext';
import SetUsg from '../DBfiles/SetUsg';
import GetUsg from '../DBfiles/GetUsg';

export default function USGTable({navigation, route}) {
  useEffect(() => {
    LogBox.ignoreLogs([
      'VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead.',
    ]);
  }, []);

  const {docNmc, clinicId} = useAppContext();

  const [dropPla, setDropPla] = useState('Anterior');
  const [dropLiq, setDropLiq] = useState('Adequate');

  const dropOption1 = [
    {
      id: '1', // acts as primary key, should be unique and non-empty string
      label: 'Anterior',
      value: 'Anterior',
    },
    {
      id: '2',
      label: 'Posterior',
      value: 'Posterior',
    },
    {
      id: '3',
      label: 'Fundal',
      value: 'Fundal',
    },
    {
      id: '4',
      label: 'Anterior low lying',
      value: 'Anterior low lying',
    },
    {
      id: '5',
      label: 'Posterior low lying',
      value: 'Posterior low lying',
    },
    {
      id: '6',
      label: 'Central placenta praevia',
      value: 'Central placenta praevia',
    },
  ];

  const dropOption2 = [
    {
      id: '1', // acts as primary key, should be unique and non-empty string
      label: 'Adequate',
      value: 'Adequate',
    },
    {
      id: '2', // acts as primary key, should be unique and non-empty string
      label: 'Oligohydramnios',
      value: 'Oligohydramnios',
    },
    {
      id: '3',
      label: 'Polyhydramnios',
      value: 'Polyhydramnios',
    },
  ];

  const [datePicker, setDatePicker] = useState(false);

  const [date, setDate] = useState(new Date());

  function showDatePicker() {
    setDatePicker(true);
  }
  function onDateSelected(event, value) {
    setDate(value);
    setDatePicker(false);
  }

  let Presc_data = route.params;

  const [pog, setPog] = useState('');
  const [usgSum, setUsgSum] = useState('');
  const [usg, setUsg] = useState('');

  const [refresh, setRefresh] = useState(false);

  const [usgData, setUsgData] = useState([]);

  useEffect(() => {
    // This code will run once when the component mounts
    console.log('PatID', Presc_data.patId);
    GetUsg(docNmc, Presc_data.patId)
      .then(result => {
        setUsgData(result);
        console.log('Get Usg Data', result);
      })
      .catch(error => {
        console.log('Error fetching UsgData in USGTable ', error);
      });
  }, [refresh]);

  function addRow() {
    const usgInfo = {
      patient_id: Presc_data.patId,
      doc_nmc: docNmc,
      clinic_id: clinicId,
      usg_report: usg,
      usg_date: date,
      // usgDate: date.toDateString(),
      pog,
      usg_sum: usgSum,
      placenta: dropPla,
      liquor: dropLiq,
    };

    console.log('Setting Usg Data', usgInfo);

    SetUsg(usgInfo)
      .then(() => {
        // Refresh obsData by toggling the refresh state
        setRefresh(prev => !prev);
        resetForm();
      })
      .catch(error => {
        console.log('Error setting Usg Data in Usg ', error);
      });

    // navigation.;
    // resetForm();
  }

  const resetForm = () => {
    setDate(new Date());
    setUsg('');
    setUsgSum('');
    setPog('');
    setDropPla('Anterior');
    setDropLiq('Adequate');
  };

  const PreviewUsg = usg_data => {
    // navigation.navigate('PreviewUsg', usg_data);
  };

  const screenWidth = Dimensions.get('window').width;

  function handleNext() {
    const usgDataX = Array.isArray(usgData) ? usgData : [usgData];

    Presc_data = {
      ...Presc_data,
      usgReport: usg,
      usgDate: date,
      // usgDate: date.toDateString(),
      pog,
      usgSum,
      placenta: dropPla,
      liquor: dropLiq,

      usgDataX,
    };

    console.log('In USG Table', Presc_data);

    navigation.navigate('AnteMonit', Presc_data);
  }

  return (
    <View style={styles.container}>
      {/* <View> */}
      {/* <Text style={styles.heading}>List of Patients</Text> */}
      {/* <Text>Prescriptions</Text> */}
      {/* </View> */}
      <ScrollView style={styles.contentContainer} nestedScrollEnabled={true}>
        <PatCard
          Id={Presc_data.patId}
          Name={Presc_data.patName}
          Age={Presc_data.patAge}
          Num={Presc_data.patPhone}
        />

        <View style={styles.ques2}>
          <Text style={styles.quesText}>USG Report</Text>
          <TextInput
            style={styles.textInput}
            placeholder="For any extra notes"
            placeholderTextColor="grey"
            value={usg}
            onChangeText={value => setUsg(value)}
          />
        </View>

        <View style={styles.ques}>
          <Text style={styles.quesText}>Choose USG Date</Text>
          {/* <Text style={styles.quesText}>Date of Birth</Text> */}
          {datePicker && (
            <DateTimePicker
              value={date}
              mode={'date'}
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              is24Hour={true}
              onChange={onDateSelected}
              // style={styleSheet.datePicker}
            />
          )}

          {!datePicker && (
            <View style={{margin: 10}}>
              <TouchableOpacity
                onPress={showDatePicker}
                style={styles.button_to}>
                <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                  Choose date
                </Text>
              </TouchableOpacity>
              <Text style={{color: 'blue', fontSize: 16, textAlign: 'center'}}>
                Set date is : {date.toDateString()}
              </Text>
            </View>
          )}
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>POG</Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Answer"
            placeholderTextColor="grey"
            value={pog}
            onChangeText={value => setPog(value)}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>USG Summary</Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Summary"
            placeholderTextColor="grey"
            value={usgSum}
            onChangeText={value => setUsgSum(value)}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Placenta</Text>
          <Picker
            style={{color: 'black', backgroundColor: 'white'}}
            selectedValue={dropPla}
            dropdownIconColor="black"
            onValueChange={(itemValue, itemIndex) => setDropPla(itemValue)}>
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
          <Text style={styles.quesText}>Liquor</Text>
          <Picker
            style={{color: 'black', backgroundColor: 'white'}}
            selectedValue={dropLiq}
            dropdownIconColor="black"
            onValueChange={(itemValue, itemIndex) => setDropLiq(itemValue)}>
            {dropOption2.map(item => (
              <Picker.Item
                key={item.id}
                label={item.label}
                value={item.value}
              />
            ))}
          </Picker>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginBottom: 10,
          }}>
          <TouchableOpacity style={styles.button_to} onPress={addRow}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>Add Row</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button_to} onPress={handleNext}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>Next</Text>
          </TouchableOpacity>
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
            <Text style={styles.quesText}>Ultrasound Details</Text>
            {Array.isArray(usgData) && (
              <FlatList
                nestedScrollEnabled={true}
                data={usgData}
                keyExtractor={item => item.presc_id}
                contentContainerStyle={{
                  width: screenWidth * 0.8,
                  paddingTop: 5,
                  // borderColor: 'black',
                  // borderWidth: 1,
                  alignSelf: 'center', // Align the FlatList to the center horizontally
                }}
                renderItem={({item}) => {
                  let usgDate = item.usg_date;
                  // console.log('UsgDate', usgDate);
                  return (
                    <TouchableOpacity
                      style={styles2.presc}
                      onPress={() => PreviewUsg(item)}>
                      <Text style={styles2.presc_text}>{usgDate}</Text>
                    </TouchableOpacity>
                  );
                }}
              />
            )}
          </View>
        </View>
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
