import { ScrollView, View, Text, TextInput, Button } from "react-native";
import { styles } from "../../assets/Style/styles";
import { useState } from "react";
import { RadioButton } from "react-native-paper";
import DatePicker from "react-native-datepicker";

export default function AncUSG({ navigation }) {
  const [date, setDate] = useState(new Date());

  const [radioLiq, setRadioLiq] = useState("");
  const [radioPla, setRadioPla] = useState("");

  const Liquor = [
    {
      id: "1",
      label: "Adeq",
      value: "Adeq",
    },
    {
      id: "2",
      label: "Poly",
      value: "Poly",
    },
    {
      id: "3",
      label: "Oligo",
      value: "Oligo",
    },
  ];
  const Placenta = [
    {
      id: "1",
      label: "Anterior",
      value: "Anterior",
    },
    {
      id: "2",
      label: "Posterior",
      value: "Posterior",
    },
    {
      id: "3",
      label: "Anterior low lying",
      value: "Anterior low lying",
    },
    {
      id: "4",
      label: "Posterior low lying",
      value: "Posterior low lying",
    },
    {
      id: "5",
      label: "Central Placenta praevia",
      value: "Central Placenta praevia",
    },
  ];
  function onPressLiq(value) {
    setRadioLiq(value);
  }
  function onPressPla(value) {
    setRadioPla(value);
  }

  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <Text style={styles.heading}>Anc USG</Text>
      </View> */}
      <ScrollView style={styles.contentContainer}>
        <View style={styles.ques}>
          <Text style={styles.quesText}>USG Date</Text>
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
          {/* <TextInput style={styles.textInput} /> */}
        </View>
        <View style={styles.ques}>
          <Text style={styles.quesText}>USG Report</Text>
          <TextInput style={styles.textInput} />
        </View>
        <View style={styles.ques}>
          <Text style={styles.quesText}>Liquor</Text>
          <View>
            {Liquor.map((option) => (
              <RadioButton.Item
                // position="leading"
                // labelStyle={{ left: 0 }}
                key={option.id}
                label={option.label}
                value={option.value}
                status={radioLiq === option.value ? "checked" : "unchecked"}
                onPress={() => onPressLiq(option.value)}
              />
            ))}
          </View>
        </View>
        <View style={styles.ques}>
          <Text style={styles.quesText}>Placenta</Text>
          <View>
            {Placenta.map((option) => (
              <RadioButton.Item
                // position="leading"
                // labelStyle={{ left: 0 }}
                key={option.id}
                label={option.label}
                value={option.value}
                status={radioPla === option.value ? "checked" : "unchecked"}
                onPress={() => onPressPla(option.value)}
              />
            ))}
          </View>
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
