import {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {styles} from '../../assets/Style/styles';

export default function Dashboard({navigation}) {
  //   function submitHandler() {
  //     const formData = {};
  //     console.log(formData);
  //   }

  return (
    <View style={style2.container}>
      <View style={{flex: 1, marginVertical: 10}}>
        <Text style={{color: 'black'}}>Hello Dr. ...</Text>
      </View>
      {/* <View style={{ flex: 1 }}>
        <Text>Edit your Profile </Text>
      </View> */}
      <View style={style2.contentContainer}>
        {/* <View style={{ flex: 1 }}> */}
        <View style={style2.boxView}>
          <TouchableOpacity
            style={style2.box}
            onPress={() => navigation.navigate('Appointments')}>
            <Image
              style={style2.image}
              source={require('../../assets/icons/appointment.png')}
            />
            <Text style={{color: 'black'}}>Appointments</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={style2.box}
            onPress={() => navigation.navigate('ListPatient')}>
            <Image
              style={style2.image}
              source={require('../../assets/icons/patients.png')}
            />
            <Text style={{color: 'black'}}>Patients</Text>
          </TouchableOpacity>
        </View>

        <View style={style2.boxView}>
          <TouchableOpacity
            style={style2.box}
            onPress={() => navigation.navigate('Invoice')}>
            <Image
              style={style2.image}
              source={require('../../assets/icons/invoice.png')}
            />
            <Text style={{color: 'black'}}>Invoice</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style2.box}>
            <Image
              style={style2.image}
              source={require('../../assets/icons/records.png')}
            />
            <Text style={{color: 'black'}}>Records</Text>
          </TouchableOpacity>
        </View>

        <View style={style2.boxView}>
          <TouchableOpacity
            style={style2.box}
            onPress={() => navigation.navigate('AddPatient')}>
            <Image
              style={style2.image}
              source={require('../../assets/icons/addPatient.png')}
            />
            <Text style={{color: 'black'}}>Add Patients</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style2.box}>
            <Image
              style={style2.image}
              source={require('../../assets/icons/anteDashboard.png')}
            />
            <Text style={{color: 'black', fontSize: 14}}>
              Antenatal Dashboard
            </Text>
          </TouchableOpacity>
        </View>
        {/* </View> */}
      </View>
    </View>
  );
}

const style2 = StyleSheet.create({
  container: {
    // marginTop: 40,
    // padding: 10,
    // borderWidth: 10,
    // borderColor: "blue",

    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    marginHorizontal: 5,
    marginTop: 10,
    // borderLeftWidth: 2,
    // borderRightWidth: 2,
    // borderWidth: 2,
    // borderColor: 'red',
    borderRadius: 20,
    backgroundColor: 'white',
    width: '90%',
    padding: 5,
    marginBottom: 20,
    // backgroundColor: "red",
    flex: 4,

    ////////Shadow Properties
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 8,
    ////////
  },
  box: {
    flex: 1,
    height: 100,
    // width: 50,
    // alignContent: "space-around",
    // borderColor: 'black',
    borderRadius: 20,
    // borderWidth: 2,
    marginHorizontal: 10,
    marginVertical: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eff5f5',

    ////////Shadow Properties
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 8,
    ////////
  },

  boxView: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'space-around',
  },
  image: {
    width: 40,
    height: 40,
  },
});
