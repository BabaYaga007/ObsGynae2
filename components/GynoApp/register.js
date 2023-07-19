/* eslint-disable prettier/prettier */
import {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {styles} from '../../assets/Style/styles.js';
// import ImagePicker from 'react-native-image-picker';
// import * as ImagePicker from 'react-native-image-picker';

export default function Register({navigation}) {
  var ImagePicker = require('react-native-image-picker');
  // Begin of code to pick logo
  const [resourcePath, setResourcePath] = useState({});

  const selectFile = () => {
    const options = {
      title: 'Select Image',
      customButtons: [
        {
          name: 'customOptionKey',
          title: 'Choose file from Custom Option',
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, res => {
      console.log('Response = ', res);
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        setResourcePath(res);
      }
    });
  };

  const cameraLaunch = () => {
    const options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchCamera(options, res => {
      console.log('Response = ', res);
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        console.log('response', JSON.stringify(res));
        setResourcePath({
          filePath: res,
          fileData: res.data,
          fileUri: res.uri,
        });
      }
    });
  };

  const imageGalleryLaunch = () => {
    const options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchImageLibrary(options, res => {
      console.log('Response = ', res);
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        console.log('response', JSON.stringify(res));
        setResourcePath({
          filePath: res,
          fileData: res.data,
          fileUri: res.uri,
        });
      }
    });
  };

  //end of code to pick logo

  return (
    <View style={styles.container}>
      <View style={{marginTop: 10}}>
        <Text style={styles.heading}>Doctor's Registration</Text>
        {/* <Text>Prescriptions</Text> */}
      </View>
      {/* <View>
        <Text>Enter your phone number or state medical number</Text>
      </View> */}
      <ScrollView style={styles.contentContainer}>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Full Name</Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Full Name"
            placeholderTextColor="grey"
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Phone</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Phone Number"
            placeholderTextColor="grey"
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Email</Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Email"
            placeholderTextColor="grey"
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Personal Qualifications</Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Personal Qualifications"
            placeholderTextColor="grey"
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>
            Designation / Hospital Affiliation
          </Text>
          <TextInput
            style={[styles.textInput, style2.fontSize]}
            multiline
            placeholder="Designation / Hospital Affiliation"
            placeholderTextColor="grey"
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Clinic Name</Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Clinic Name"
            placeholderTextColor="grey"
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Clinic Address</Text>
          <TextInput
            style={styles.textInput}
            multiline
            placeholder="Clinic Address"
            placeholderTextColor="grey"
          />
        </View>
        <View style={styles.ques2}>
          <Text style={styles.quesText}>Clinic Ph Number</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Clinic Ph Number"
            placeholderTextColor="grey"
          />
        </View>
        <View style={styles.ques}>
          {/* <TextInput style={styles.textInput} placeholder="Clinic Logo" /> */}
          {/* <Text style={styles.quesText}>Clinic Logo</Text> */}
          {resourcePath.data && (
            <Image
              source={{
                uri: 'data:image/jpeg;base64,' + resourcePath.data,
              }}
              style={{width: 100, height: 100}}
            />
          )}
          {resourcePath.uri && (
            <Image
              source={{uri: resourcePath.uri}}
              style={{width: 200, height: 200}}
            />
          )}
          <Text style={{alignItems: 'center'}}>{resourcePath.uri}</Text>
          <TouchableOpacity onPress={selectFile} style={styles.button_to}>
            <Text style={styles.button_to_text}>Select File</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={cameraLaunch} style={styles.button}>
            <Text style={styles.buttonText}>Launch Camera Directly</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={imageGalleryLaunch} style={styles.button}>
            <Text style={styles.buttonText}>Launch Image Gallery Directly</Text>
          </TouchableOpacity> */}
        </View>
        <View>
          {/* <Button title="Next" onPress={submitHandler} /> */}
          <TouchableOpacity
            style={styles.button_to}
            onPress={() => navigation.navigate('Drawer')}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Submit</Text>
          </TouchableOpacity>
          {/* <Button title="Forgot Password" /> */}

          {/* <View>
            <Text style={{}}>We need permission for the services you use</Text>
            <TouchableOpacity style={({ width: "30%" }, styles.button_to)}>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                Learn More
              </Text>
            </TouchableOpacity>
          </View> */}
        </View>
      </ScrollView>
    </View>
  );
}

const style2 = StyleSheet.create({
  fontSize: {
    fontSize: 15,
  },
});

// Styles for Image Picker
const styles3 = StyleSheet.create({
  fab: {
    backgroundColor: '#EA5B70',
  },
  image: {
    marginVertical: 24,
    alignItems: 'center',
  },
});
