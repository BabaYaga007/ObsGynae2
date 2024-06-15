import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  // FlatList,
  ScrollView,
} from "react-native";
import axios from "axios";

import { RadioButton } from "react-native-paper";
import DatePicker from "react-native-datepicker";
import { Picker } from "react-native";
import { styles } from "../../assets/Style/styles";

export default function FormStart({ navigation }) {
  const [dropValue, setDropValue] = useState("Obs & Gynae Consult");
  const [date, setDate] = useState(new Date());

  // const [radioValue, setRadioButtons] = useState("Obs & Gynae Consult");
  const dropOptions = [
    {
      id: "1", // acts as primary key, should be unique and non-empty string
      label: "Obs & Gynae Consult",
      value: "Obs & Gynae Consult",
    },
    {
      id: "2",
      label: "Gynae Follow Up",
      value: "Gynae Follow Up",
    },
    {
      id: "3",
      label: "ANC Follow",
      value: "ANC Follow",
    },
    {
      id: "4",
      label: "Surgical Record",
      value: "Surgical Record",
    },
  ];
  // function onPressRadioButton(value) {
  //   setRadioButtons(value);
  // }

  //form states
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [complaint, setComplaint] = useState("");
  //form functions
  function phoneInput(enteredText) {
    setPhone(enteredText);
  }
  function emailInput(enteredText) {
    setEmail(enteredText);
  }
  function complaintInput(enteredText) {
    setComplaint(enteredText);
  }

  function submitHandler() {
    const formData = {
      Phone: phone,
      Email: email,
      Complaint: complaint,
      Date: date,
      RadioButton: selectedValue,
    };

    console.log(formData);

    // axios
    //   .post(
    //     "https://sheet.best/api/sheets/b8c96406-ea16-4e4f-ac37-c89549ada887",
    //     formData
    //   )
    //   .then((response) => {
    //     // console.log(response);
    //     //Clearing form fields
    //     // setComplaint("");
    //     // setEmail("");
    //     // setPhone("");
    //   });
  }

  function nextScreen() {
    if (dropValue == "Obs & Gynae Consult") {
      navigation.navigate("ObsGynae");
    } else if (dropValue == "Gynae Follow Up") {
      navigation.navigate("Investigation");
    } else if (dropValue == "ANC Follow") {
      navigation.navigate("AncFollow");
    } else if (dropValue == "Surgical Record") {
      navigation.navigate("Surgical");
    }
  }

  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <Text style={styles.heading}>Obs & Gynae Clinic Prescription</Text>
      </View> */}
      <ScrollView style={styles.contentContainer}>
        <View style={styles.ques}>
          <Text style={styles.quesText}>Phone Number</Text>
          <TextInput
            placeholder="1234567890"
            style={styles.textInput}
            onChangeText={phoneInput}
            value={phone}
          />
        </View>
        <View style={styles.ques}>
          <Text style={styles.quesText}>Email</Text>
          <TextInput
            placeholder="abc@abc.com"
            style={styles.textInput}
            onChangeText={emailInput}
            value={email}
          />
        </View>
        <View style={styles.ques}>
          <Text style={styles.quesText}>Present Complaints</Text>
          <TextInput
            placeholder="Your answer"
            style={styles.textInput}
            onChangeText={complaintInput}
            value={complaint}
          />
        </View>
        <View style={styles.ques}>
          <Text style={styles.quesText}>LMP</Text>
          <View>
            <DatePicker
              style={styles.datePickerStyle}
              date={date}
              mode="date"
              placeholder="select date"
              format="DD/MM/YYYY"
              minDate="01-01-1970"
              maxDate="01-01-2070"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: "absolute",
                  right: -5,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  borderColor: "gray",
                  alignItems: "flex-start",
                  borderWidth: 0,
                  borderBottomWidth: 1,
                },
                placeholderText: {
                  fontSize: 17,
                  color: "gray",
                },
                dateText: {
                  fontSize: 17,
                },
              }}
              onDateChange={(date) => {
                setDate(date);
              }}
            />
          </View>
        </View>
        <View style={styles.ques}>
          <Text style={styles.quesText}>Consult</Text>
          {/* <View>
            {radioOptions.map((option) => (
              <RadioButton.Item
                key={option.id}
                label={option.label}
                value={option.value}
                status={radioValue === option.value ? "checked" : "unchecked"}
                onPress={() => onPressRadioButton(option.value)}
              />
            ))}
          </View> */}
          {/* <View>
            <RadioButton.Group
              onValueChange={(newValue) => setRadioButtons(newValue)}
              value={radioValue}
            >
              <RadioButton.Item label="First" value="first" />
              <RadioButton.Item label="Second" value="second" />
              <RadioButton.Item label="Third" value="third" />
            </RadioButton.Group>
          </View> */}

          <View style={styles.dropdown}>
            <Picker
              selectedValue={dropValue}
              onValueChange={(itemValue, itemIndex) => setDropValue(itemValue)}
            >
              {dropOptions.map((item) => (
                <Picker.Item
                  key={item.id}
                  label={item.label}
                  value={item.value}
                />
              ))}
            </Picker>
          </View>

          {/* {{ obs } && <ObsGynae />} */}
          {/* <Surgical />
          <Anc /> */}
          {/* <Gynae /> */}
        </View>
        <View style={styles.naviButtonStart}>
          {/* <Button title="Next" onPress={submitHandler} /> */}
          <Button title="Next" onPress={nextScreen} />
          {/* <Button
            title="Next"
            onPress={() => navigation.navigate("ObsGynae")}
          /> */}
        </View>
      </ScrollView>
    </View>
  );
}

// const styles2 = StyleSheet.
