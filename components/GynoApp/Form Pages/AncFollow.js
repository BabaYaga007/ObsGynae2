import { ScrollView, View, Text, TextInput, Button } from "react-native";
import { styles } from "../../assets/Style/styles";
import { useState } from "react";
import { RadioButton } from "react-native-paper";

export default function AncFollow({ navigation }) {
  const [radioValue, setRadioButtons] = useState("NAD");

  const radioOptions = [
    {
      id: "1", // acts as primary key, should be unique and non-empty string
      label: "NAD",
      value: "NAD",
    },
    {
      id: "2",
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
        <Text style={styles.heading}>Antinatal Card Details</Text>
      </View> */}
      <ScrollView style={styles.contentContainer}>
        <View style={styles.ques}>
          <Text style={styles.quesText}>Hb</Text>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.ques}>
          <Text style={styles.quesText}>OGTT</Text>
          <TextInput
            style={styles.textInput}
            // placeholder="FirstName LastName"
          />
        </View>
        <View style={styles.ques}>
          <Text style={styles.quesText}>TSH</Text>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.ques}>
          <Text style={styles.quesText}>Urine R/M</Text>
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
        <View style={styles.naviButton}>
          {/* <Button title="Next" onPress={submitHandler} /> */}
          <Button title="Next" onPress={() => navigation.navigate("AncUSG")} />
          <Button title="Back" onPress={() => navigation.goBack()} />
        </View>
      </ScrollView>
    </View>
  );
}
