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
import {SearchBar} from 'react-native-elements';

export default function Prescription({navigation}) {
  return (
    <View style={styles.container}>
      {/* <View> */}
      {/* <Text style={styles.heading}>List of Patients</Text> */}
      {/* <Text>Prescriptions</Text> */}
      {/* </View> */}
      <ScrollView style={styles.contentContainer} nestedScrollEnabled={true}>
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

        <View>
          <TouchableOpacity
            style={styles.button_to}
            onPress={() => navigation.navigate('PhyExam')}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>Prescription</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.button_to}
            onPress={() => navigation.navigate('AntePres')}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>
              Antenatal Prescription
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.button_to}
            onPress={() => navigation.navigate('InferPres')}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>
              Infertility Prescription
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.button_to}
            onPress={() => navigation.navigate('SurgPro')}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>
              Surgical Record
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            borderColor: 'blue',
            borderWidth: 2,
            height: 250,
            borderRadius: 10,
            marginVertical: 10,
          }}>
          <View style={{overflow: 'scroll'}}>
            <Text style={styles.quesText}>Previous Prescriptions</Text>
            <ScrollView nestedScrollEnabled={true}>
              <TouchableOpacity
                style={{height: 50, margin: 5, backgroundColor: 'grey'}}>
                <Text style={{color: 'black'}}>19th July, 2005</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{height: 50, margin: 5, backgroundColor: 'grey'}}>
                <Text style={{color: 'black'}}>19th July, 2005</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{height: 50, margin: 5, backgroundColor: 'grey'}}>
                <Text style={{color: 'black'}}>19th July, 2005</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{height: 50, margin: 5, backgroundColor: 'grey'}}>
                <Text style={{color: 'black'}}>19th July, 2005</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{height: 50, margin: 5, backgroundColor: 'grey'}}>
                <Text style={{color: 'black'}}>19th July, 2005</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>

        <View style={styles.naviButton}>
          <TouchableOpacity
            style={styles.button_to}
            //   onPress={() => navigation.navigate("AddPatient")}
          >
            <Text style={{fontSize: 18, fontWeight: '600'}}>
              Update Prescription
            </Text>
          </TouchableOpacity>

          {/* <TouchableOpacity
            style={styles.button_to}
            // onPress={() => navigation.navigate('AntePres')}
          >
            <Text style={{fontSize: 18, fontWeight: '600'}}>Next</Text>
          </TouchableOpacity> */}
        </View>

        {/* <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <View></View>
        </View> */}
      </ScrollView>
    </View>
  );
}
