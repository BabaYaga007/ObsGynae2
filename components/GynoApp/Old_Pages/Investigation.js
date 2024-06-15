import { ScrollView, View, Text, TextInput, Button } from "react-native";
import { useState } from "react";
import { styles } from "../assets/Style/styles";
import { RadioButton } from "react-native-paper";
import { Picker } from "react-native";
import { CheckBox, Icon } from "@rneui/themed";

export default function Investigation({ navigation }) {
  // Checkboxes for Past History
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);
  const [check6, setCheck6] = useState(false);
  const [check7, setCheck7] = useState(false);
  const [check8, setCheck8] = useState(false);
  const [check9, setCheck9] = useState(false);
  const [check10, setCheck10] = useState(false);
  const [check11, setCheck11] = useState(false);
  const [check12, setCheck12] = useState(false);
  const [check13, setCheck13] = useState(false);
  const [check14, setCheck14] = useState(false);
  const [check15, setCheck15] = useState(false);
  const [check16, setCheck16] = useState(false);
  const [check17, setCheck17] = useState(false);
  const [check18, setCheck18] = useState(false);
  //   const [check19, setCheck19] = useState(false);
  //   const [check20, setCheck20] = useState(false);
  const [other, setOther] = useState("");

  function setInvestigations(enteredText) {
    setOther(enteredText);
  }

  const dropOptions = [
    {
      id: "1",
      label: "Review after 1 week",
      value: "Review after 1 week",
    },
    {
      id: "1",
      label: "Review after 2 week",
      value: "Review after 2 week",
    },
    {
      id: "1",
      label: "Review after 1 month",
      value: "Review after 1 month",
    },
    {
      id: "1",
      label: "Review with reports",
      value: "Review with reports",
    },
    {
      id: "1",
      label: "Review postop Day 4th & 8th",
      value: "Review postop Day 4th & 8th",
    },
  ];

  const [dropValue, setDropValue] = useState("Gynae Consult");

  const [radioValue1, setRadioButtons1] = useState("Option1");
  const [radioValue2, setRadioButtons2] = useState("Option1");
  const [radioValue3, setRadioButtons3] = useState("Option1");

  const radioOptions1 = [
    {
      id: "1", // acts as primary key, should be unique and non-empty string
      label: "Option 1",
      value: "Option 1",
    },
    {
      id: "2",
      label: "Other",
      value: "Other",
    },
  ];

  const radioOptions2 = [
    {
      id: "1",
      label: "Option 1",
      value: "Ooption1",
    },
    {
      id: "2",
      label: "Other",
      value: "Other",
    },
  ];

  const radioOptions3 = [
    {
      id: "1",
      label: "Option 1",
      value: "Ooption1",
    },
    {
      id: "2",
      label: "Other",
      value: "Other",
    },
  ];
  function onPressRadioButton1(value) {
    setRadioButtons1(value);
  }
  function onPressRadioButton2(value) {
    setRadioButtons2(value);
  }
  function onPressRadioButton3(value) {
    setRadioButtons3(value);
  }

  function submitHandler() {
    const formData = {
      RadioButton: radioValue1,
      RadioButton: radioValue1,
      RadioButton: radioValue1,
      DropDown: dropValue,
      Investigation: [
        check1,
        check2,
        check3,
        check4,
        check5,
        check6,
        check7,
        check8,
        check9,
        check10,
        check11,
        check12,
        check13,
        check14,
        check15,
        check16,
        check17,
        check18,
        other,
      ],
    };
    console.log(formData);
  }

  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <Text style={styles.heading}>Investigation Reports & Rx</Text>
      </View> */}
      <ScrollView style={styles.contentContainer}>
        <View style={styles.ques}>
          <Text style={styles.quesText}>Investigation Reports</Text>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.ques}>
          <Text style={styles.quesText}>Investigation Advised</Text>
          <CheckBox
            containerStyle={{ paddingBottom: 0 }}
            title="CBC"
            checked={check1}
            onPress={() => setCheck1(!check1)}
          />
          <CheckBox
            containerStyle={{ paddingBottom: 0 }}
            title="BG"
            checked={check2}
            onPress={() => setCheck2(!check2)}
          />
          <CheckBox
            containerStyle={{ paddingBottom: 0 }}
            title="OGTT 75 gm Glucose F, 1hr, 2hr"
            checked={check3}
            onPress={() => setCheck3(!check3)}
          />
          <CheckBox
            containerStyle={{ paddingBottom: 0 }}
            title="BS F& PP"
            checked={check4}
            onPress={() => setCheck4(!check4)}
          />
          <CheckBox
            containerStyle={{ paddingBottom: 0 }}
            title="PCOS Profile on Day 2-3 of cycle LH FSH TSH Testosterone Free, Serum Prolactin,"
            checked={check5}
            onPress={() => setCheck5(!check5)}
          />
          <CheckBox
            containerStyle={{ paddingBottom: 0 }}
            title="Thyroid Profile"
            checked={check6}
            onPress={() => setCheck6(!check6)}
          />
          <CheckBox
            containerStyle={{ paddingBottom: 0 }}
            title="Urine R/M"
            checked={check7}
            onPress={() => setCheck7(!check7)}
          />
          <CheckBox
            // center
            containerStyle={{ paddingBottom: 0 }}
            title="ANC profile CBC, BG H&W, OGTT- 75 gm glucose Fasting 1&2 hr, HBsAg, HIV, HCV, VDRL, TSH, HPLC, Rubella IgG, Urine R/m"
            checked={check8}
            onPress={() => setCheck8(!check8)}
          />
          <CheckBox
            containerStyle={{ paddingBottom: 0 }}
            title="CBC, BG, BS F& PP, LFT, KFT, HBsAg, HIV, HCV, CXR-PA, ECG,Echo, PT with INR,Covid RT PCR"
            checked={check9}
            onPress={() => setCheck9(!check9)}
          />
          <CheckBox
            containerStyle={{ paddingBottom: 0 }}
            title="USG Whole abdomen & Pelvis"
            checked={check10}
            onPress={() => setCheck10(!check10)}
          />
          <CheckBox
            containerStyle={{ paddingBottom: 0 }}
            title="Ultrasound Pelvis"
            checked={check11}
            onPress={() => setCheck11(!check11)}
          />
          <CheckBox
            containerStyle={{ paddingBottom: 0 }}
            title="Ultrasound for fetal Viability & to confirm intrauterine pregnancy"
            checked={check12}
            onPress={() => setCheck12(!check12)}
          />
          <CheckBox
            containerStyle={{ paddingBottom: 0 }}
            title="Ultrasound NT NB Scan 11-13 weeks, Dual screen and PET screen"
            checked={check13}
            onPress={() => setCheck13(!check13)}
          />
          <CheckBox
            containerStyle={{ paddingBottom: 0 }}
            title="Ultrasound Obst Level 2 for anomalies 18-20 weeks"
            checked={check14}
            onPress={() => setCheck14(!check14)}
          />
          <CheckBox
            containerStyle={{ paddingBottom: 0 }}
            title="Ultrasound Obst for Fetal Echo at 23-24 weeks"
            checked={check15}
            onPress={() => setCheck15(!check15)}
          />
          <CheckBox
            containerStyle={{ paddingBottom: 0 }}
            title="Ultrasound Obst for growth liquor"
            checked={check16}
            onPress={() => setCheck16(!check16)}
          />
          <CheckBox
            containerStyle={{ paddingBottom: 0 }}
            title="Doppler"
            checked={check17}
            onPress={() => setCheck17(!check17)}
          />
          <CheckBox
            containerStyle={{ paddingBottom: 0 }}
            title="Paps,  wet and HPV"
            checked={check18}
            onPress={() => setCheck18(!check18)}
          />
          <View style={styles.checkbox}>
            <CheckBox
              containerStyle={{ paddingBottom: 0, paddingRight: 0 }}
              title="Other"
              checked={other}
              onPress={() => setOther(!other)}
            />
            <TextInput
              style={styles.textInputCheck}
              onChangeText={setInvestigations}
            />
          </View>
        </View>
        <View style={styles.ques}>
          <Text style={styles.quesText}>Provisional Diagnosis</Text>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.ques}>
          <Text style={styles.quesText}>Treatment 1</Text>
          <View>
            {radioOptions1.map((option) => (
              <RadioButton.Item
                // position="leading"
                // labelStyle={{ left: 0 }}
                key={option.id}
                label={option.label}
                value={option.value}
                status={radioValue1 === option.value ? "checked" : "unchecked"}
                onPress={() => onPressRadioButton1(option.value)}
              />
            ))}
          </View>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.ques}>
          <Text style={styles.quesText}>Treatment 2</Text>
          <View>
            {radioOptions2.map((option) => (
              <RadioButton.Item
                // position="leading"
                // labelStyle={{ left: 0 }}
                key={option.id}
                label={option.label}
                value={option.value}
                status={radioValue2 === option.value ? "checked" : "unchecked"}
                onPress={() => onPressRadioButton2(option.value)}
              />
            ))}
          </View>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.ques}>
          <Text style={styles.quesText}>Treatment 3</Text>
          <View>
            {radioOptions3.map((option) => (
              <RadioButton.Item
                // position="leading"
                // labelStyle={{ left: 0 }}
                key={option.id}
                label={option.label}
                value={option.value}
                status={radioValue3 === option.value ? "checked" : "unchecked"}
                onPress={() => onPressRadioButton3(option.value)}
              />
            ))}
          </View>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.ques}>
          <Text style={styles.quesText}>Treatment 4</Text>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.ques}>
          <Text style={styles.quesText}>Follow Up</Text>
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
          {/* <TextInput style={styles.textInput} /> */}
        </View>

        <View style={styles.naviButton}>
          <Button title="Submit" onPress={submitHandler} />
          {/* <Button
            title="Next"
            onPress={() => navigation.navigate("Antenatal")}
          /> */}
          <Button title="Back" onPress={() => navigation.goBack()} />
        </View>
      </ScrollView>
    </View>
  );
}
