import {useState} from 'react';
import {
  ScrollView,
  FlatList,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import {styles} from '../../assets/Style/styles';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function Upcoming({navigation}) {
  return (
    // <Text style={{flex: 1, color: 'black'}}>
    <View style={{flex: 1, backgroundColor: 'white', paddingVertical: 10}}>
      <Text
        style={{
          color: 'black',
          alignSelf: 'center',
          fontSize: 16,
          marginVertical: 10,
        }}>
        Upcoming Appointments
      </Text>

      <ScrollView style={{marginHorizontal: 10}}>
        <TouchableOpacity
          style={{
            // borderWidth: 2,
            // borderColor: "grey",\

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
              <Text style={{fontSize: 18, color: 'grey'}}>Time: 2.30pm</Text>
            </View>
          </View>

          <View style={styles.naviButton}>
            <TouchableOpacity
              style={styles.button_to}
              onPress={() => navigation.navigate('ConsultNow')}>
              <Text>Consult Now</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button_to}>
              <Text>Reschedule </Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            // borderWidth: 2,
            // borderColor: "grey",\

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
              <Text style={{fontSize: 18, color: 'grey'}}>Time: 2.30pm</Text>
            </View>
          </View>

          <View style={styles.naviButton}>
            <TouchableOpacity
              style={styles.button_to}
              onPress={() => navigation.navigate('ConsultNow')}>
              <Text>Consult Now</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button_to}>
              <Text>Reschedule </Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            // borderWidth: 2,
            // borderColor: "grey",\

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
              <Text style={{fontSize: 18, color: 'grey'}}>Time: 2.30pm</Text>
            </View>
          </View>

          <View style={styles.naviButton}>
            <TouchableOpacity
              style={styles.button_to}
              onPress={() => navigation.navigate('ConsultNow')}>
              <Text>Consult Now</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button_to}>
              <Text>Reschedule </Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            // borderWidth: 2,
            // borderColor: "grey",\

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
              <Text style={{fontSize: 18, color: 'grey'}}>Time: 2.30pm</Text>
            </View>
          </View>

          <View style={styles.naviButton}>
            <TouchableOpacity
              style={styles.button_to}
              onPress={() => navigation.navigate('ConsultNow')}>
              <Text>Consult Now</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button_to}>
              <Text>Reschedule </Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
    // </Text>
  );
}

function Past({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: 'white', paddingVertical: 10}}>
      <Text
        style={{
          color: 'black',
          alignSelf: 'center',
          fontSize: 16,
          marginVertical: 10,
        }}>
        Previous Appointments
      </Text>

      <ScrollView style={{marginHorizontal: 10}}>
        <TouchableOpacity
          style={{
            // borderWidth: 2,
            // borderColor: "grey",\

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
              <Text style={{fontSize: 18, color: 'grey'}}>Time: 2.30pm</Text>
            </View>
          </View>

          <View style={styles.naviButton}>
            <TouchableOpacity
              style={styles.button_to}
              onPress={() => navigation.navigate('ConsultNow')}>
              <Text>Consult Now</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button_to}>
              <Text>Reschedule </Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            // borderWidth: 2,
            // borderColor: "grey",\

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
              <Text style={{fontSize: 18, color: 'grey'}}>Time: 2.30pm</Text>
            </View>
          </View>

          <View style={styles.naviButton}>
            <TouchableOpacity
              style={styles.button_to}
              onPress={() => navigation.navigate('ConsultNow')}>
              <Text>Consult Now</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button_to}>
              <Text>Reschedule </Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            // borderWidth: 2,
            // borderColor: "grey",\

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
              <Text style={{fontSize: 18, color: 'grey'}}>Time: 2.30pm</Text>
            </View>
          </View>

          <View style={styles.naviButton}>
            <TouchableOpacity
              style={styles.button_to}
              onPress={() => navigation.navigate('ConsultNow')}>
              <Text>Consult Now</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button_to}>
              <Text>Reschedule </Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            // borderWidth: 2,
            // borderColor: "grey",\

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
              <Text style={{fontSize: 18, color: 'grey'}}>Time: 2.30pm</Text>
            </View>
          </View>

          <View style={styles.naviButton}>
            <TouchableOpacity
              style={styles.button_to}
              onPress={() => navigation.navigate('ConsultNow')}>
              <Text>Consult Now</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button_to}>
              <Text>Reschedule </Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

export default function Appointment({navigation}) {
  return (
    // <View>
    //   <Text style={{fontSize: 16, color: 'black'}}>
    //     Find all info about your Appointments here
    //    </Text>
    // </View>

    <Tab.Navigator>
      <Tab.Screen name="Upcoming" component={Upcoming} />
      <Tab.Screen name="Past" component={Past} />
    </Tab.Navigator>

    // {/* Show appointments based on day basis ? */}
    // {/* Make a dynamic table that will fetch from database on daywise basis */}

    // {/* <View style={styles.naviButton}>
    //   <Button
    //     title="Add Patient"
    //     onPress={() => navigation.navigate("AddPatient")}
    //   />
    // </View> */}
    // </View>
  );
}
