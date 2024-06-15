/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-alert */
/* eslint-disable prettier/prettier */
import {useState, useEffect, React, useCallback} from 'react';
import {
  // ScrollView,
  FlatList,
  View,
  Text,
  TouchableOpacity,
  Modal,
  Button,
  Image,
  StyleSheet,
  Platform,
} from 'react-native';
import {styles} from '../../assets/Style/styles';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import DateTimePicker from '@react-native-community/datetimepicker';
import {useFocusEffect} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import {useAppContext} from '../AppContext';
import GetAppoint from './DBfiles/GetAppoint';
import GetPatients from './DBfiles/GetPatients';

const Tab = createMaterialTopTabNavigator();

function Upcoming({navigation, route}) {
  // function Reschedule()

  const {docNmc} = route.params;

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
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

  /// Creating a Loopable component
  const [data, setData] = useState([]);

  const [patData, setPatData] = useState([]);

  function handleConsult(item) {
    console.log('Finding whether patient exists or not');

    GetPatients(docNmc)
      .then(result => {
        // Now we navigate based on the updated patDat
        const phone = item.pat_phone;
        console.log('Phone = ', phone);

        if (result.some(item => item.pat_phone === phone)) {
          navigation.navigate('ConsultNow', item);
          console.log('found Record - GOOOOOD');
        } else {
          console.log('Record Not found ');
          navigation.navigate('AddPatient2', item);
          // console.log(result);
        }
      })
      .catch(error => {
        console.log('Error fetching data: ', error);
      });
  }

  useFocusEffect(
    useCallback(() => {
      GetAppoint(docNmc)
        .then(result => {
          // Filter the result array based on the condition (e.g., where status is 1)
          const filteredResult = result.filter(item => item.status === 1);
          // Set the filtered result using setData
          setData(filteredResult);
        })
        .catch(error => {
          console.log('Error fetching data: ', error);
        });
    }, []),
  );

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('PatInfo', item)}
        style={{
          marginVertical: 5,
          borderRadius: 20,
          backgroundColor: '#bdf0d2',
          // padding: 10,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
          <Image
            source={require('../../assets/icons/patients.png')}
            style={{
              height: 40,
              width: 40,
              marginHorizontal: 20,
              justifyContent: 'center',
              alignSelf: 'center',
            }}
          />
          <View style={{alignSelf: 'center'}}>
            <Text style={{fontSize: 22, color: 'grey'}}>{item.pat_name}</Text>
            <Text style={{fontSize: 18, color: 'grey'}}>
              Age: {item.pat_age}
            </Text>
            <Text style={{fontSize: 18, color: 'grey'}}>
              Number: {item.pat_phone}
            </Text>
            <Text style={{fontSize: 18, color: 'grey'}}>
              Date: {new Date(item.sch_date).toDateString()}
            </Text>
            <Text style={{fontSize: 18, color: 'grey'}}>
              Time: {item.sch_time}
            </Text>
          </View>
        </View>

        <View style={styles.naviButton}>
          <TouchableOpacity
            style={styles.button_to}
            onPress={() => handleConsult(item)}>
            <Text>Consult Now</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button_to} onPress={toggleModal}>
            <Text>Reschedule</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  const handleAppoint = () => {
    console.log('Handle Appointments.');
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white', paddingVertical: 5}}>
      <Text
        style={{
          color: 'black',
          alignSelf: 'center',
          fontSize: 16,
          marginVertical: 5,
        }}>
        Upcoming Appointments
      </Text>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.appoint_id.toString()}
        contentContainerStyle={{marginHorizontal: 10}}
      />

      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={toggleModal}>
        <TouchableOpacity
          activeOpacity={1.0}
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
                    style={{color: 'blue', fontSize: 16, textAlign: 'center'}}>
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
                    style={{color: 'blue', fontSize: 16, textAlign: 'center'}}>
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
                style={styles2.button_to}
                onPress={handleAppoint}>
                <Text style={{fontSize: 18, fontWeight: '600'}}>Save</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles2.button_to} onPress={toggleModal}>
                <Text style={{fontSize: 18, fontWeight: '600'}}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

// return (
//   <View style={{flex: 1, backgroundColor: 'white', paddingVertical: 10}}>
//     <Text
//       style={{
//         color: 'black',
//         alignSelf: 'center',
//         fontSize: 16,
//         marginVertical: 10,
//       }}>
//       Upcoming Appointments
//     </Text>

//     <FlatList style={{marginHorizontal: 10}}>
//       {/* Making a looped version of the elements */}

//       {data.map(item => (
//         <TouchableOpacity
//           key={item.appoint_id}
//           onPress={() => navigation.navigate('PatInfo', item)}
//           style={{
//             // borderWidth: 2,
//             // borderColor: "grey",\

//             marginVertical: 10,
//             borderRadius: 20,
//             backgroundColor: '#bdf0d2',
//           }}>
//           <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
//             <Image
//               source={require('../../assets/icons/patients.png')}
//               style={{
//                 height: 40,
//                 width: 40,
//                 marginHorizontal: 20,
//                 justifyContent: 'center',
//                 alignSelf: 'center',
//               }}
//             />
//             <View style={{alignSelf: 'center'}}>
//               <Text style={{fontSize: 22, color: 'grey'}}>
//                 {item.pat_name}
//               </Text>
//               <Text style={{fontSize: 18, color: 'grey'}}>
//                 Age: {item.pat_age}
//               </Text>
//               <Text style={{fontSize: 18, color: 'grey'}}>
//                 Number: {item.pat_phone}
//               </Text>
//               <Text style={{fontSize: 18, color: 'grey'}}>
//                 Date: {item.sch_date}
//               </Text>
//               <Text style={{fontSize: 18, color: 'grey'}}>
//                 Time: {item.sch_time}
//               </Text>
//             </View>
//           </View>

//           <View style={styles.naviButton}>
//             <TouchableOpacity
//               style={styles.button_to}
//               onPress={() => navigation.navigate('ConsultNow', item)}
//               // onPress={() => navigation.navigate('AddPatient2', item)}
//             >
//               <Text>Consult Now</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.button_to} onPress={toggleModal}>
//               <Text>Reschedule</Text>
//             </TouchableOpacity>
//           </View>
//         </TouchableOpacity>
//       ))}

//       <View>
//         <Modal
//           visible={isModalVisible}
//           transparent={true}
//           animationType="slide" // You can choose other animation types like 'fade', 'none', etc.
//           onRequestClose={toggleModal} // For Android back button handling
//         >
//           <TouchableOpacity
//             activeOpacity={1.0}
//             // onPress={toggleModal}
//             style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//             <View
//               style={{
//                 marginVertical: 50,
//                 height: 350,
//                 width: '90%',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 borderColor: 'green',
//                 borderWidth: 2,
//                 backgroundColor: 'white',
//                 borderRadius: 20,
//               }}>
//               <View style={styles.ques}>
//                 {datePicker && (
//                   <DateTimePicker
//                     value={date}
//                     mode={'date'}
//                     display={Platform.OS === 'ios' ? 'spinner' : 'default'}
//                     is24Hour={true}
//                     onChange={onDateSelected}
//                     // style={styleSheet.datePicker}
//                   />
//                 )}

//                 {!datePicker && (
//                   <View style={{margin: 10}}>
//                     <TouchableOpacity
//                       onPress={showDatePicker}
//                       style={styles.button_to}>
//                       <Text style={{fontSize: 15, fontWeight: 'bold'}}>
//                         Next Appointment Date
//                       </Text>
//                     </TouchableOpacity>
//                     <Text
//                       style={{
//                         color: 'blue',
//                         fontSize: 16,
//                         textAlign: 'center',
//                       }}>
//                       Set date is : {date.toDateString()}
//                     </Text>
//                   </View>
//                 )}
//               </View>

//               <View style={styles.ques}>
//                 {timePicker && (
//                   <DateTimePicker
//                     value={time}
//                     mode={'time'}
//                     display={Platform.OS === 'ios' ? 'spinner' : 'default'}
//                     is24Hour={true}
//                     onChange={onTimeSelected}
//                     // style={styleSheet.datePicker}
//                   />
//                 )}

//                 {!timePicker && (
//                   <View style={{margin: 10}}>
//                     <TouchableOpacity
//                       onPress={showTimePicker}
//                       style={styles.button_to}>
//                       <Text style={{fontSize: 15, fontWeight: 'bold'}}>
//                         Set Appointment Time
//                       </Text>
//                     </TouchableOpacity>
//                     <Text
//                       style={{
//                         color: 'blue',
//                         fontSize: 16,
//                         textAlign: 'center',
//                       }}>
//                       Set time is : {time.toTimeString()}
//                     </Text>
//                   </View>
//                 )}
//               </View>

//               <View
//                 style={{
//                   flexDirection: 'row',
//                   justifyContent: 'space-between',
//                   marginVertical: 10,
//                 }}>
//                 <TouchableOpacity
//                   style={styles2.button_to}
//                   //   onPress={() => navigation.navigate("AddPatient")}
//                 >
//                   <Text style={{fontSize: 18, fontWeight: '600'}}>Save</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                   style={styles2.button_to}
//                   onPress={toggleModal}>
//                   <Text style={{fontSize: 18, fontWeight: '600'}}>Close</Text>
//                 </TouchableOpacity>
//               </View>

//               {/* <Button title="Save" /> */}
//             </View>
//           </TouchableOpacity>
//         </Modal>
//       </View>
//     </FlatList>
//   </View>

//   // </Text>
// );
// }

function Past({navigation, route}) {
  // function Reschedule()
  const {docNmc} = route.params;

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
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

  /// Creating a Loopable component
  const [data, setData] = useState([]);
  // useFocusEffect(
  //   useCallback(() => {
  //     AppointUser()
  //       .then(result => {
  //         setData(result);
  //       })
  //       .catch(error => {
  //         console.log('Error fetching data: ', error);
  //       });
  //   }, []),
  // );
  useFocusEffect(
    useCallback(() => {
      GetAppoint(docNmc)
        .then(result => {
          // Filter the result array based on the condition (e.g., where status is 2)
          const filteredResult = result.filter(item => item.status === 2);
          // Set the filtered result using setData
          setData(filteredResult);
        })
        .catch(error => {
          console.log('Error fetching data: ', error);
        });
    }, []),
  );

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('PatInfo', item)}
      style={{
        marginVertical: 10,
        borderRadius: 20,
        backgroundColor: '#bdf0d2',
        padding: 10,
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
        <Image
          source={require('../../assets/icons/patients.png')}
          style={{
            height: 40,
            width: 40,
            marginHorizontal: 20,
            justifyContent: 'center',
            alignSelf: 'center',
          }}
        />
        <View style={{alignSelf: 'center'}}>
          <Text style={{fontSize: 22, color: 'grey'}}>{item.pat_name}</Text>
          <Text style={{fontSize: 18, color: 'grey'}}>Age: {item.pat_age}</Text>
          <Text style={{fontSize: 18, color: 'grey'}}>
            Number: {item.pat_phone}
          </Text>
          <Text style={{fontSize: 18, color: 'grey'}}>
            Date: {new Date(item.sch_date).toDateString()}
          </Text>
          <Text style={{fontSize: 18, color: 'grey'}}>
            Time: {item.sch_time}
          </Text>
        </View>
      </View>

      <View style={styles.naviButton}>
        <TouchableOpacity
          style={styles.button_to}
          onPress={() => navigation.navigate('ConsultNow', item)}>
          <Text>Consult Now</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button_to} onPress={toggleModal}>
          <Text>Reschedule</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{flex: 1, backgroundColor: 'white', paddingVertical: 5}}>
      <Text
        style={{
          color: 'black',
          alignSelf: 'center',
          fontSize: 16,
          marginVertical: 5,
        }}>
        Past Appointments
      </Text>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.appoint_id.toString()}
        contentContainerStyle={{marginHorizontal: 10}}
      />

      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={toggleModal}>
        <TouchableOpacity
          activeOpacity={1.0}
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
                    style={{color: 'blue', fontSize: 16, textAlign: 'center'}}>
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
                    style={{color: 'blue', fontSize: 16, textAlign: 'center'}}>
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
              <TouchableOpacity style={styles2.button_to}>
                <Text style={{fontSize: 18, fontWeight: '600'}}>Save</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles2.button_to} onPress={toggleModal}>
                <Text style={{fontSize: 18, fontWeight: '600'}}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

export default function Appointment({navigation}) {
  const {docNmc, setDocNmc, docName, setDocName, clinicId, setClinicId} =
    useAppContext();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Upcoming"
        component={Upcoming}
        initialParams={{docNmc}}
      />
      <Tab.Screen name="Past" component={Past} initialParams={{docNmc}} />
    </Tab.Navigator>
  );
}

const styles2 = StyleSheet.create({
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
