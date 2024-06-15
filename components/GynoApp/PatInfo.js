/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Modal,
  TextInput,
  Image,
  TouchableOpacity,
  Platform,
  FlatList,
  Dimensions,
  ScrollView,
} from 'react-native';
import {styles} from '../../assets/Style/styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import {useAppContext} from '../AppContext';
import SetAppoint from './DBfiles/SetAppoint';
import GetPresc from './DBfiles/GetPresc';
import {LogBox} from 'react-native';
// import {FlatList, ScrollView} from 'react-native-gesture-handler';
// import {ScrollView} from 'react-native-virtualized-view';

export default function PatInfo({navigation, route}) {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  const {docNmc} = useAppContext();

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  let PatInfo = route.params;

  console.log('Data from ListPatient', PatInfo);

  var birthdate = Date.parse(PatInfo.pat_dob);
  var cur = new Date();
  var diff = cur - birthdate; // This is the difference in milliseconds
  var age = Math.floor(diff / 31557600000); // Divide by 1000*60*60*24*365.25

  PatInfo = {
    ...PatInfo,
    pat_age: age,
  };
  // Declared for Date Picker
  const [datePicker, setDatePicker] = useState(false);

  const [date, setDate] = useState(new Date());

  function showDatePicker() {
    setDatePicker(true);
  }
  function onDateSelected(event, value) {
    setDate(value);
    setDatePicker(false);
  }
  // Declared for Time Picker
  const [timePicker, setTimePicker] = useState(false);

  const [time, setTime] = useState(new Date());

  function showTimePicker() {
    setTimePicker(true);
  }
  function onTimeSelected(event, value) {
    setTime(value);
    setTimePicker(false);
  }

  const setAppointment = () => {
    // let [email_id, setEmailId] = useState('');
    // console.log(pat_name, pat_phone, pat_dob, sch_date, sch_time);
    console.log('Setting Appointment - Achint');
    console.log(PatInfo);
    // let sch_date = date.toDateString();
    // let sch_time = time.toTimeString();
    const sch_date = date.toISOString().split('T')[0];
    const sch_time = time.toTimeString().split(' ')[0];
    console.log(sch_date + ' ||| ' + sch_time);
    // console.log(sch_time);

    let status = 1; // 1 is for Upcoming , 2 for Past

    let schInfo = {
      docNmc,
      pat_name: PatInfo.pat_name,
      pat_phone: PatInfo.pat_phone,
      pat_dob: PatInfo.pat_dob,
      sch_date,
      sch_time,
      pat_age: PatInfo.pat_age,
      status,
    };

    // SetAppoint(schInfo)
    SetAppoint(schInfo);

    toggleModal();
    // navigation.navigate('Dashboard');
  };

  function handleNext() {
    console.log('Left PatInfo :', PatInfo);

    if ('pat_email' in PatInfo) {
      navigation.navigate('ConsultNow', PatInfo);
    } else {
      navigation.navigate('AddPatient2', PatInfo);
    }
  }

  const [prescData, setPrescData] = useState([]);

  console.log('Global nmc ' + docNmc);

  useEffect(() => {
    // This code will run once when the component mounts
    GetPresc(docNmc, PatInfo.patient_id)
      .then(result => {
        setPrescData(result);
        // console.log(result);
      })
      .catch(error => {
        console.log('Error fetching Prescdata in PatInfo: ', error);
      });
  }, []);

  console.log('Length =', prescData.length);

  const screenWidth = Dimensions.get('window').width;

  const handlePrsc = Presc_data => {
    if (Presc_data.form == 'ANC') {
      navigation.navigate('PreviewAnc', Presc_data);
    } else if (Presc_data.form == 'SURG') {
      navigation.navigate('PreviewSurg', Presc_data);
    } else if (Presc_data.form == 'INF') {
      navigation.navigate('PreviewInfy', Presc_data);
    } else {
      navigation.navigate('PreviewPrsc', Presc_data);
    }
  };

  return (
    <View style={styles.container}>
      {/* <View>
        <Text style={styles.heading}>Patient Info</Text>
      </View> */}
      <ScrollView style={styles.contentContainer} nestedScrollEnabled={true}>
        <View style={{marginBottom: 20}}>
          <Image
            style={Style2.Img}
            source={require('../../assets/images/women.png')}
          />
        </View>
        <View style={Style2.ques3}>
          <Text style={Style2.quesText2}>Patient ID</Text>
          <Text style={Style2.quesText}>{PatInfo.patient_id}</Text>
        </View>
        <View style={Style2.ques3}>
          <Text style={Style2.quesText2}>Name</Text>
          <Text style={Style2.quesText}>{PatInfo.pat_name}</Text>
        </View>
        <View style={Style2.ques3}>
          <Text style={Style2.quesText2}>Phone</Text>
          <Text style={Style2.quesText}>{PatInfo.pat_phone}</Text>
        </View>
        <View style={Style2.ques3Email}>
          <Text style={Style2.quesText2}>Email</Text>
          <Text style={Style2.quesText}>{PatInfo.pat_email}</Text>
        </View>
        <View style={Style2.ques3}>
          <Text style={Style2.quesText2}>Gender</Text>
          <Text style={Style2.quesText}>{PatInfo.pat_gender}</Text>
        </View>
        <View style={Style2.ques3}>
          <Text style={Style2.quesText2}>Height</Text>
          <Text style={Style2.quesText}>{PatInfo.pat_height}</Text>
        </View>

        <View style={Style2.ques3}>
          <Text style={Style2.quesText2}>DOB</Text>
          <Text style={Style2.quesText}>{PatInfo.pat_dob}</Text>
        </View>

        <View style={Style2.ques3}>
          <Text style={Style2.quesText2}>Age</Text>
          <Text style={Style2.quesText}>{age} years</Text>
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
            <Text style={styles.quesText}>Previous Prescriptions</Text>
            {Array.isArray(prescData) && (
              <FlatList
                nestedScrollEnabled
                data={prescData}
                keyExtractor={item => item.presc_id}
                contentContainerStyle={{
                  width: screenWidth * 0.8,
                  paddingTop: 5,
                  // borderColor: 'black',
                  // borderWidth: 1,
                  alignSelf: 'center', // Align the FlatList to the center horizontally
                }}
                renderItem={({item}) => {
                  let pdate = new Date(item.created_dt).toDateString();
                  // console.log('Flatlist = ', item);
                  let form = item.form;
                  return (
                    <TouchableOpacity
                      style={Style2.presc}
                      onPress={() => handlePrsc(item)}>
                      <Text style={Style2.presc_text}>
                        {form + ' ' + pdate}
                      </Text>
                    </TouchableOpacity>
                  );
                }}
              />
            )}
          </View>
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
            <Text style={styles.quesText}>Previous Invoices</Text>
            <ScrollView nestedScrollEnabled={true} style={{marginVertical: 5}}>
              {/* <TouchableOpacity
                style={Style2.presc}
                onPress={() => navigation.navigate('PrevInvoice')}>
                <Text style={Style2.presc_text}>19th July, 2023</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={Style2.presc}
                onPress={() => navigation.navigate('PrevInvoice')}>
                <Text style={Style2.presc_text}>4th December, 2003</Text>
              </TouchableOpacity> */}
            </ScrollView>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginVertical: 10,
          }}>
          {/* <View> */}
          <TouchableOpacity style={styles.button_to} onPress={handleNext}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>Consult Now</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button_to} onPress={toggleModal}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>
              Set Appointment
            </Text>
          </TouchableOpacity>
          {/* </View> */}
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginBottom: 10,
          }}>
          <TouchableOpacity
            style={styles.button_to}
            onPress={() => navigation.navigate('UpdatePatient', PatInfo)}
            // onPress={() => handleUpdate(navigation, PatInfo)}
          >
            <Text style={{fontSize: 18, fontWeight: '600'}}>
              Update Profile
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <Modal
            visible={isModalVisible}
            transparent={true}
            animationType="slide" // You can choose other animation types like 'fade', 'none', etc.
            onRequestClose={toggleModal} // For Android back button handling
          >
            <TouchableOpacity
              activeOpacity={1.0}
              // onPress={toggleModal}
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <View
                style={{
                  marginVertical: 50,
                  height: 350,
                  width: '90%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderColor: 'green',
                  borderWidth: 2,
                  backgroundColor: 'white',
                  borderRadius: 20,
                }}>
                <View style={styles.ques}>
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
                          Next Appointment Date
                        </Text>
                      </TouchableOpacity>
                      <Text
                        style={{
                          color: 'blue',
                          fontSize: 16,
                          textAlign: 'center',
                        }}>
                        Set date is : {date.toDateString()}
                      </Text>
                    </View>
                  )}
                </View>

                <View style={styles.ques}>
                  {timePicker && (
                    <DateTimePicker
                      value={time}
                      mode={'time'}
                      display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                      is24Hour={true}
                      onChange={onTimeSelected}
                      // style={styleSheet.datePicker}
                    />
                  )}

                  {!timePicker && (
                    <View style={{margin: 10}}>
                      <TouchableOpacity
                        onPress={showTimePicker}
                        style={styles.button_to}>
                        <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                          Set Appointment Time
                        </Text>
                      </TouchableOpacity>
                      <Text
                        style={{
                          color: 'blue',
                          fontSize: 16,
                          textAlign: 'center',
                        }}>
                        Set time is : {time.toTimeString()}
                      </Text>
                    </View>
                  )}
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginVertical: 10,
                  }}>
                  <TouchableOpacity
                    style={Style2.button_to}
                    onPress={() => setAppointment(PatInfo, date, time)}>
                    <Text style={{fontSize: 18, fontWeight: '600'}}>Save</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={Style2.button_to}
                    onPress={toggleModal}>
                    <Text style={{fontSize: 18, fontWeight: '600'}}>Close</Text>
                  </TouchableOpacity>
                </View>

                {/* <Button title="Save" /> */}
              </View>
            </TouchableOpacity>
          </Modal>
        </View>
      </ScrollView>
    </View>
  );
}
const Style2 = StyleSheet.create({
  ques3: {
    // backgroundColor: "",
    borderColor: '#0000ff',
    borderWidth: 2,
    // marginBottom: 5,
    borderRadius: 10,
    // paddingLeft: 10,
    // paddingRight: 10,
    padding: 0,
    marginVertical: 3,
    height: 40,
    flexDirection: 'row',
    // justifyContent: 'center',
  },
  ques3Email: {
    // backgroundColor: "",
    borderColor: '#0000ff',
    borderWidth: 2,
    // marginBottom: 5,
    borderRadius: 10,
    // paddingLeft: 10,
    // paddingRight: 10,
    padding: 0,
    marginVertical: 3,
    height: 50,
    flexDirection: 'row',
    // justifyContent: 'center',
  },
  quesText2: {
    fontSize: 15,
    color: 'black',
    backgroundColor: '#8fbcf7',
    // paddingHorizontal: 5,
    // paddingVertical: 5,

    textAlign: 'center',
    textAlignVertical: 'center',
    width: '25%',
    height: '100%',
    borderRadius: 7,
  },
  quesText: {
    fontSize: 15,
    color: 'black',
    // backgroundColor: '#8fbcf7',
    paddingHorizontal: 10,
    // paddingVertical: 5,

    textAlign: 'left',
    textAlignVertical: 'center',
    width: '75%',
    height: '100%',
    borderRadius: 7,
  },

  Img: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    borderRadius: 75,
  },
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
  button_to: {
    height: 50,
    // width: 100,
    backgroundColor: '#4d79ff',
    // backgroundColor: '#9f99de',
    padding: 8,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    marginHorizontal: 10,
    // marginBottom: 10,
  },
});
