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
import {SearchBar} from '@rneui/themed';

export default function ListPatient({navigation}) {
  const [searchItem, setSearch] = useState('');

  function handleSearch(text) {
    // Handle search logic here
    setSearch(text);
    console.log('Search text:', text);
  }

  return (
    <View style={styles.container}>
      <View>
        {/* <Text style={styles.heading}>List of Patients</Text> */}
        {/* <Text>Prescriptions</Text> */}
      </View>
      {/* <View style={styles.contentContainer}> */}
      <SearchBar
        placeholder="Search by Name or Phone"
        onChangeText={handleSearch}
        value={searchItem}
        // You can customize the SearchBar props as per your requirements
        // For example, you can set inputStyle, containerStyle, etc.
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
      />

      {/* Add your other components and content here */}
      {/* </View> */}
      {/* Create a database query to fetch patients alphabetically */}
      <ScrollView style={styles.contentContainer}>
        <View style={{marginTop: 0}}>
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
        </View>
      </ScrollView>
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
