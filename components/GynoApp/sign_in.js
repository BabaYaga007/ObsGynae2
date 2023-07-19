/* eslint-disable react/react-in-jsx-scope */
// import {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {styles} from '../../assets/Style/styles';

export default function SignIn({navigation}) {
  // function submitHandler() {
  //   const formData = {};
  //   console.log(formData);
  // }

  return (
    <View
      style={{
        paddingTop: 40,
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
      }}>
      <View style={{marginVertical: 20}}>
        <Text style={styles.heading}>OBGYN</Text>
        <Text style={styles.heading}>Prescriptions</Text>
      </View>
      <View style={{}}>
        <Text style={{fontSize: 17, color: 'black'}}>
          Enter your phone number or state medical number
        </Text>
      </View>
      <ScrollView style={styles.contentContainer}>
        <View style={styles.ques2}>
          {/* <Text style={styles.quesText}>Phone Number</Text> */}
          <TextInput
            style={styles.textInput}
            // multiline
            placeholder="Phone Number"
            placeholderTextColor="grey"
          />
        </View>
        <View style={styles.ques2}>
          {/* <Text style={styles.quesText}>Passworf</Text> */}
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            placeholderTextColor="grey"
          />
        </View>
        <View style={styles.naviButton}>
          {/* {/* <Button
            title="Sign In"
            onPress={() => navigation.navigate("DrawerNavi")}
          /> *
          /} */}
          <TouchableOpacity
            style={styles.button_to}
            onPress={() => navigation.navigate('Drawer')}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button_to}
            // onPress={() => navigation.navigate('Drawer')}
          >
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              Forgot Password
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{marginVertical: 20}}>
          <Text style={{fontSize: 15, marginTop: 10, color: 'black'}}>
            Don't have an account
          </Text>
          {/* <Button title="Sign Up" onPress={() => navigation.navigate('Register')} /> */}
          <TouchableOpacity
            style={styles.button_to}
            onPress={() => navigation.navigate('Register')}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Register</Text>
          </TouchableOpacity>

          <Text style={{fontSize: 15, marginTop: 10, color: 'black'}}>OR</Text>
          <Text style={{fontSize: 15, marginBottom: 10, color: 'black'}}>
            Login via
          </Text>

          <View style={styles.naviButton}>
            <TouchableOpacity
              style={styles2.button}
              // onPress={}
            >
              <Image
                source={require('../../assets/icons/google.png')}
                style={styles2.buttonIcon}
              />
              <Text style={styles2.buttonText}>Google</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles2.button}
              // onPress={onPress}
            >
              <Image
                source={require('../../assets/icons/twitter.png')}
                style={styles2.buttonIcon}
              />
              <Text style={styles2.buttonText}>Twitter</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles2.button}
              // onPress={onPress}
            >
              <Image
                source={require('../../assets/icons/facebook.png')}
                style={styles2.buttonIcon}
              />
              <Text style={styles2.buttonText}>Facebook</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles2 = StyleSheet.create({
  button: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonIcon: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
    // borderColor: "black",
    // borderWidth: 1,
  },
  buttonText: {
    fontSize: 16,
    // fontWeight: 'bold',
    color: 'black',
  },
});
