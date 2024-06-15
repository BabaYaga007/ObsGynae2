/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {useState, useEffect, useRef} from 'react';
import {useFocusEffect} from '@react-navigation/native';
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
  Dimensions,
} from 'react-native';
import {styles} from '../../assets/Style/styles';
import {SearchBar} from '@rneui/themed';
import {useAppContext} from '../AppContext';
import GetPatients from './DBfiles/GetPatients';

export default function ListPatient({navigation}) {
  const {docNmc} = useAppContext();

  const [searchItem, setSearch] = useState('');
  const [data, setData] = useState([]);
  // const [originalData, setOriginalData] = useState([]); // Added for preserving original data
  const originalDataRef = useRef([]); // useRef to persist original data

  // useEffect(() => {
  //   DisplayPat()
  //     .then(result => {
  //       setData(result);
  //       originalDataRef.current = result; // Save original data to the ref
  //     })
  //     .catch(error => {
  //       console.log('Error fetching data: ', error);
  //     });
  //   // });
  // }, []); //the dependancy array, if removed keeps calling the fetch query

  // const response = GetPatients(docNmc);
  // console.log(response);

  useFocusEffect(
    React.useCallback(() => {
      // Code inside this block will run every time the screen is focused
      console.log('Entering useFocusEffect callback');

      // For example, you can call DisplayPat() again to refresh the data
      GetPatients(docNmc)
        .then(result => {
          setData(result);
          originalDataRef.current = result;
          // console.log('Pat data: -', result);
        })
        .catch(error => {
          console.log('Error fetching data: ', error);
        });
    }, []),
  );

  /// Creating a Loopable component

  const handleSearch = text => {
    setSearch(text);
    const filteredData = originalDataRef.current.filter(item =>
      item.pat_name.toLowerCase().includes(text.toLowerCase()),
    );

    // console.log(filteredData);
    setData(filteredData);
  };

  const clearSearch = () => {
    setSearch('');
    setData(originalDataRef.current); // Restore original data
  };

  const screenWidth = Dimensions.get('window').width;
  return (
    <View style={styles.container}>
      {/* <View style={styles.contentContainer}> */}
      <SearchBar
        placeholder="Search by Name"
        onChangeText={handleSearch}
        value={searchItem}
        containerStyle={{
          borderRadius: 20,
          padding: 0,
          backgroundColor: 'white',
        }}
        inputContainerStyle={{
          borderRadius: 20,
          backgroundColor: '#b3e6ff',
          borderWidth: 0,
          width: '90%',
          // margin: 5,
        }}
        inputStyle={{color: 'grey'}}
        onCancel={clearSearch} // Call clearSearch when the search is canceled
      />

      <FlatList
        data={data}
        keyExtractor={item => item.patient_id}
        contentContainerStyle={{
          width: screenWidth * 0.8,
          paddingTop: 10,
          // borderColor: 'black',
          // borderWidth: 1,
          alignSelf: 'center', // Align the FlatList to the center horizontally
        }}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('PatInfo', item)}
            style={{
              // borderWidth: 2,
              // borderColor: "grey",

              width: '100%',
              marginVertical: 5,
              borderRadius: 20,
              backgroundColor: '#bdf0d2',
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-evenly'}}
              key={item.patient_id}>
              <View
                // source={require('../../assets/icons/female.png')}
                style={{
                  // height: 40,
                  // width: 40,
                  // marginHorizontal: 5,
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}>
                <Text style={{fontSize: 18, color: 'grey'}}>
                  ID: {item.patient_id}
                </Text>
              </View>
              <View style={{alignSelf: 'center'}}>
                <Text style={{fontSize: 22, color: 'black'}}>
                  {item.pat_name}
                </Text>
                <Text style={{fontSize: 18, color: 'grey'}}>
                  DOB: {item.pat_dob}
                </Text>
                <Text style={{fontSize: 18, color: 'grey'}}>
                  Number: {item.pat_phone}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />

      <View style={styles.naviButton}>
        {/* <Button title="Next" onPress={submitHandler} /> */}
        <TouchableOpacity
          style={styles.button_to}
          onPress={() => navigation.navigate('AddPatient')}>
          <Text style={{fontSize: 18, fontWeight: '600'}}>Add Patient</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
