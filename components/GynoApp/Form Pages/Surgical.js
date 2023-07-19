import { ScrollView, View, Text, TextInput, Button } from "react-native";
import { styles } from "../assets/Style/styles";
import { useState } from "react";
import { RadioButton } from "react-native-paper";

export default function Surgical({ navigation }) {
  const [radioValue, setRadioButtons] = useState("NAD");

  const radioOptions = [
    {
      id: "1", // acts as primary key, should be unique and non-empty string
      label: "OPU",
      value: "OPU",
    },
    {
      id: "2",
      label: "IUI",
      value: "IUI",
    },
    {
      id: "3",
      label: "ET",
      value: "ET",
    },
    {
      id: "4",
      label: "Hysteroscopy",
      value: "Hysteroscopy",
    },

    {
      id: "5",
      label: "Laparoscopy",
      value: "Laparoscopy",
    },
    {
      id: "6",
      label: "Diagnostic laparoscopy and hysteroscopy",
      value: "Diagnostic laparoscopy and hysteroscopy",
    },
    {
      id: "7",
      label: "Other",
      value: "Other",
    },
  ];

  function onPressRadioButton(value) {
    setRadioButtons(value);
  }

  function submitHandler() {
    const formData = {
      RadioButton: radioValue,
    };
    console.log(formData);
  }

  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <Text style={styles.heading}>Surgical Procedures</Text>
      </View> */}
      <ScrollView style={styles.contentContainer}>
        <View style={styles.ques}>
          <Text style={styles.quesText}>Surgical Procedure</Text>
          <View>
            {radioOptions.map((option) => (
              <RadioButton.Item
                // position="leading"
                // labelStyle={{ left: 0 }}
                key={option.id}
                label={option.label}
                value={option.value}
                status={radioValue === option.value ? "checked" : "unchecked"}
                onPress={() => onPressRadioButton(option.value)}
              />
            ))}
          </View>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.ques}>
          <Text style={styles.quesText}>Intraoperative Findings</Text>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.naviButton}>
          {/* <Button title="Next" onPress={submitHandler} /> */}
          <Button
            title="Next"
            onPress={() => navigation.navigate("Clinical")}
          />
          <Button title="Back" onPress={() => navigation.goBack()} />
        </View>
      </ScrollView>
    </View>
  );
}
