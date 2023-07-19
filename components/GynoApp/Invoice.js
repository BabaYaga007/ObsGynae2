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
// import {SearchBar} from 'react-native-elements';
import FlashMessage, {
  showMessage,
  hideMessage,
} from 'react-native-flash-message';

export default function Invoice({navigation}) {
  return (
    <View style={styles.container}>
      {/* <View> */}
      {/* <Text style={styles.heading}>List of Patients</Text> */}
      {/* <Text>Prescriptions</Text> */}
      {/* </View> */}
      <ScrollView style={styles.contentContainer}>
        {/* <View style={{ marginTop: 0 }}> */}
        <TouchableOpacity
          style={{
            // borderWidth: 2,
            // borderColor: "grey",
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
            </View>
          </View>

          {/* <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                marginTop: 10,
              }}
            >
              <Text style={{ fontSize: 16 }}>More Details</Text>
              <Image
                source={require("../assets/icons/arrow_right.png")}
                style={{ height: 40, width: 40, marginHorizontal: 10 }}
              />
            </View> */}
        </TouchableOpacity>
        {/* </View> */}
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Amount</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Amount"
            placeholderTextColor="grey"
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Consultation / Procedure</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Consultation / Procedure"
            multiline
            placeholderTextColor="grey"
          />
        </View>

        <View style={styles.ques2}>
          <Text style={styles.quesText}>Cash / Credit</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Cash / Credit"
            placeholderTextColor="grey"
          />
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          {/* <Button title="Next" onPress={submitHandler} /> */}
          <View>
            <TouchableOpacity
              style={styles.button_to}
              onPress={() => navigation.goBack()}>
              <Text style={{fontSize: 18, fontWeight: '600'}}>Back</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.button_to}
              onPress={() =>
                showMessage({
                  message: 'Invoice Sent to Patient',
                  type: 'info',
                })
              }>
              <Text style={{fontSize: 18, fontWeight: '600'}}>
                Send Invoice
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <FlashMessage
        position="bottom"
        floating="true"
        style={{
          backgroundColor: 'grey',
          height: 50,
          alignSelf: 'center',
          // padding: 0,
        }}
        titleStyle={{fontSize: 18}}
        // statusBarHeight={10}
        duration={2000}
      />
    </View>
  );
}
