/* eslint-disable prettier/prettier */
import {useState, useEffect} from 'react';
import {
  // ScrollView,
  // FlatList,
  View,
  Text,
  TextInput,
  Button,
  Modal,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {styles} from '../../assets/Style/styles';
import {useAppContext} from '../AppContext';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import GetPresc from './DBfiles/GetPresc';
import PatCard from './PatCard';
import {LogBox} from 'react-native';
// import {ScrollView} from 'react-native-virtualized-view';

export default function Prescription({navigation, route}) {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  const {docNmc} = useAppContext();

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  let Presc_data = route.params;

  console.log('In Prescription', Presc_data);

  Presc_data = {
    ...Presc_data,
    form: 'PRSC',
  };

  let Presc_anc = {
    ...Presc_data,
    form: 'ANC',
  };

  let Presc_inf = {
    ...Presc_data,
    form: 'INF',
  };

  let Presc_surg = {
    ...Presc_data,
    form: 'SURG',
  };

  const [prescData, setPrescData] = useState([]);

  const screenWidth = Dimensions.get('window').width;

  console.log('Global nmc ', docNmc, 'Id : ', Presc_data.patId);

  useEffect(() => {
    // This code will run once when the component mounts
    GetPresc(docNmc, Presc_data.patId)
      .then(result => {
        setPrescData(result);
        // console.log('GetPresc', result);
      })
      .catch(error => {
        console.log('Error fetching Prescdata in PatInfo: ', error);
      });
  }, []);

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
      {/* <View> */}
      {/* <Text style={styles.heading}>List of Patients</Text> */}
      {/* <Text>Prescriptions</Text> */}
      {/* </View> */}
      <ScrollView style={styles.contentContainer} nestedScrollEnabled={true}>
        {/* <View style={{ marginTop: 0 }}> */}
        {/* <PatCard Name="Achint Srivastava" Dob="7 June 1999" Num="9876543210" /> */}
        <PatCard
          Id={Presc_data.patId}
          Name={Presc_data.patName}
          Age={Presc_data.patAge}
          Num={Presc_data.patPhone}
        />
        {/* </View> */}

        <View>
          <TouchableOpacity
            style={styles.button_to}
            onPress={() => navigation.navigate('PhyExam', Presc_data)}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>Prescription</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.button_to}
            onPress={() => navigation.navigate('AntePres', Presc_anc)}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>
              Antenatal Prescription
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.button_to}
            onPress={() => navigation.navigate('InferPres', Presc_inf)}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>
              Infertility Prescription
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={styles.button_to}
            onPress={() => navigation.navigate('SurgPro', Presc_surg)}>
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
            marginVertical: 6,
          }}>
          <View style={{flex: 1}}>
            {/* <View style={{overflow: 'scroll'}}> */}
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
                style={{flexGrow: 1}}
                renderItem={({item}) => {
                  let pdate = new Date(item.created_dt).toDateString();
                  // console.log('Flatlist = ', item);
                  let form = item.form;
                  return (
                    <TouchableOpacity
                      style={styles2.presc}
                      onPress={() => handlePrsc(item)}>
                      <Text style={styles2.presc_text}>
                        {form + ' ' + pdate}
                      </Text>
                    </TouchableOpacity>
                  );
                }}
              />
            )}
          </View>
        </View>

        <View style={(styles.naviButton, {marginBottom: 5})}>
          <TouchableOpacity style={styles.button_to}>
            <Text style={{fontSize: 18, fontWeight: '600'}}>
              Send Prescription
            </Text>
          </TouchableOpacity>
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
