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
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {styles} from '../../../assets/Style/styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import {LogBox} from 'react-native';
import {useAppContext} from '../../AppContext';
import SetMonit from '../DBfiles/SetMonit';
import GetMonit from '../DBfiles/GetMonit';

export default function AnteMonit({navigation, route}) {
  useEffect(() => {
    LogBox.ignoreLogs([
      'VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead.',
    ]);
  }, []);

  const {docNmc, clinicId} = useAppContext();

  const [datePicker, setDatePicker] = useState(false);

  const [date, setDate] = useState(new Date());

  function showDatePicker() {
    setDatePicker(true);
  }
  function onDateSelected(event, value) {
    setDate(value);
    setDatePicker(false);
  }

  const [antePog, setAntePog] = useState('');
  const [anteBP, setAnteBP] = useState('');
  const [anteWt, setAnteWt] = useState('');
  const [anteOE, setAnteOE] = useState('');
  const [antePallor, setAntePallor] = useState('');
  const [antePE, setAntePE] = useState('');

  const [refresh, setRefresh] = useState(false);

  let Presc_data = route.params;

  const [monitData, setMonitData] = useState('');

  useEffect(() => {
    // This code will run once when the component mounts
    GetMonit(docNmc, Presc_data.patId)
      .then(result => {
        setMonitData(result);
        console.log('GetMonitData', result);
      })
      .catch(error => {
        console.log('Error fetching Monit Data in AnteMonit ', error);
      });
  }, [refresh]);

  function addRow() {
    const monitInfo = {
      patient_id: Presc_data.patId,
      doc_nmc: docNmc,
      clinic_id: clinicId,
      anteMDate: date,
      anteBP,
      anteOE,
      antePallor,
      antePog,
      anteWt,
      antePE,
    };

    console.log('Setting Monit Data');

    SetMonit(monitInfo)
      .then(() => {
        // Refresh obsData by toggling the refresh state
        setRefresh(prev => !prev);
        resetForm();
      })
      .catch(error => {
        console.log('Error setting Obs Data in Obstetric ', error);
      });

    // navigation.;
    // resetForm();
  }

  const resetForm = () => {
    setAntePE('');
    setAnteOE('');
    setAnteBP('');
    setAntePallor('');
    setAntePog('');
    setAnteWt('');
    setDate(new Date());
  };

  const PreviewMonit = monit_data => {
    // navigation.navigate('PreviewMonit', monit_data);
  };

  const screenWidth = Dimensions.get('window').width;

  function handleNext() {
    const monitX = Array.isArray(monitData) ? monitData : [monitData];

    Presc_data = {
      ...Presc_data,
      anteMDate: date,
      anteBP,
      anteOE,
      antePallor,
      antePog,
      anteWt,
      antePE,

      monitX,
    };

    console.log('In Ante Monitoring', Presc_data);

    navigation.navigate('Provisional', Presc_data);
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.contentContainer} nestedScrollEnabled={true}>
        <View style={styles.ques}>
          <Text style={styles.quesText}>Choose Date</Text>

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
          {/* </View> */}
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>POG</Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Answer"
            placeholderTextColor="grey"
            value={antePog}
            onChangeText={value => setAntePog(value)}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Weight</Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="in Kg"
            placeholderTextColor="grey"
            value={anteWt}
            onChangeText={value => setAnteWt(value)}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Blood Pressure(mm Hg)</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Systolic/Diastolic"
            placeholderTextColor="grey"
            value={anteBP}
            onChangeText={value => setAnteBP(value)}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Pallor</Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Present/Absent"
            placeholderTextColor="grey"
            value={antePallor}
            onChangeText={value => setAntePallor(value)}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Pedal Edema</Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Present/Absent"
            placeholderTextColor="grey"
            value={antePE}
            onChangeText={value => setAntePE(value)}
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>O/E</Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Answer"
            placeholderTextColor="grey"
            value={anteOE}
            onChangeText={value => setAnteOE(value)}
          />
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
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
            <Text style={styles.quesText}>Ante Monitoring Details</Text>
            {Array.isArray(monitData) && (
              <FlatList
                nestedScrollEnabled={true}
                data={monitData}
                keyExtractor={item => item.presc_id}
                contentContainerStyle={{
                  width: screenWidth * 0.8,
                  paddingTop: 5,
                  // borderColor: 'black',
                  // borderWidth: 1,
                  alignSelf: 'center', // Align the FlatList to the center horizontally
                }}
                renderItem={({item}) => {
                  let antem_date = item.antem_date;
                  // antem_date = antem_date?.toDateString();
                  // console.log('Flatlist = ', item);
                  return (
                    <TouchableOpacity
                      style={styles2.presc}
                      onPress={() => PreviewMonit(item)}>
                      <Text style={styles2.presc_text}>{antem_date}</Text>
                    </TouchableOpacity>
                  );
                }}
              />
            )}
          </View>
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
