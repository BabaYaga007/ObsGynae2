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
  StyleSheet,
} from 'react-native';
import {styles} from '../../../assets/Style/styles';

export default function ({navigation}) {
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
        </TouchableOpacity>
        {/* </View> */}

        <View style={styles.naviButton}>
          <TouchableOpacity
            style={styles.button_to}
            onPress={() => navigation.goBack()}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>
              Update Prescription
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button_to}
            onPress={() => navigation.goBack()}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>Back</Text>
          </TouchableOpacity>
        </View>

        {/* <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <View></View>
          </View> */}
      </ScrollView>
    </View>
  );
}
