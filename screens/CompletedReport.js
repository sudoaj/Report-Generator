import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableHighlight,
  Text,
} from "react-native";
import { Table, TableWrapper, Row, Rows } from "react-native-table-component";
import { Actions } from "react-native-router-flux";

export default class CompletedReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      officerNameAndDate: [
        ["Name: ", "Ajayi Adulsalam"],
        ["Date: ", "09/05/2020"],
      ],
      siteNameAndTime: [
        ["Site: ", "Atl Botanical Garden"],
        ["Time: ", "2000 - 0800"],
      ],
      tableHead: ["Time", "Entry"],
      tableData: [
        [
          "1900",
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        ],
        [
          "2000",
          "LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem ",
        ],
        [
          "2100",
          "Lorem Ipsum is simply dumndard dummy text ever since the 1500s,it to make a type specimen book. It has survived not",
        ],
        [
          "2100",
          "Lorem Ipsum is simply dumndard dummy text ever since the 1500s,it to make a type specimen book. It has survived not",
        ],
        [
          "2100",
          "Lorem Ipsum is simply dumndard dummy text ever since the 1500s,it to make a type specimen book. It has survived not",
        ],
        [
          "2100",
          "Lorem Ipsum is simply dumndard dummy text ever since the 1500s,it to make a type specimen book. It has survived not",
        ],
        [
          "2100",
          "Lorem Ipsum is simply dumndard dummy text ever since the 1500s,it to make a type specimen book. It has survived not",
        ],
        [
          "2100",
          "Lorem Ipsum is simply dumndard dummy text ever since the 1500s,it to make a type specimen book. It has survived not",
        ],
        [
          "2100",
          "Lorem Ipsum is simply dumndard dummy text ever since the 1500s,it to make a type specimen book. It has survived not",
        ],
      ],
      officerDignature: [["Signature:"]],
    };
  }
  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri:
              "https://i.pinimg.com/originals/3e/19/2a/3e192a828893f058e5ebcf9522358b14.jpg",
          }}
        />
        <Table borderStyle={{ borderColor: "#000" }}>
          <View style={styles.container2}>
            <Row
              data={state.officerNameAndDate}
              flexArr={[2, 2]}
              style={styles.head}
              textStyle={styles.infoText}
            />
            <Row
              data={state.siteNameAndTime}
              flexArr={[2, 2]}
              style={styles.head}
              textStyle={styles.infoText}
            />
          </View>
        </Table>

        <ScrollView>
          <View style={styles.container2}>
            <Table borderStyle={{ borderWidth: 1, borderColor: "#000" }}>
              <Row
                data={state.tableHead}
                flexArr={[1, 4]}
                style={styles.head}
                textStyle={styles.headText}
              />

              <TableWrapper style={styles.wrapper}>
                <Rows
                  data={state.tableData}
                  flexArr={[1, 4]}
                  textStyle={styles.text}
                />
              </TableWrapper>
              <Rows
                data={state.officerDignature}
                flexArr={[1, 4]}
                textStyle={{ fontSize: 20, padding: 10, fontWeight: "bold" }}
              />
            </Table>
          </View>
        </ScrollView>

        <TouchableHighlight
          style={styles.print}
          onPress={() => handlePrintJob()}
          underlayColor="#fff"
        >
          <Text style={styles.submitText2}>Print</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const handlePrintJob = () => {
  console.log("Printing...");
};
const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: "#fff" },
  container2: { flex: 1, marginBottom: 100, backgroundColor: "#fff" },
  head: { height: 40, backgroundColor: "#fafafa" },

  wrapper: { flexDirection: "row" },
  title: { flex: 1, backgroundColor: "#fafa" },
  headText: { textAlign: "center" },
  infoText: {
    textAlign: "left",
    marginLeft: 30,
    borderBottomColor: "#000",
    fontWeight: "bold",
  },
  text: { textAlign: "left", margin: 10, fontSize: 10 },
  tinyLogo: {
    width: 300,
    height: 70,
    marginLeft: 50,
    alignItems: "center",
  },
  submitText2: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
  },
  print: {
    marginRight: 100,
    marginLeft: 100,
    marginTop: 5,
    marginBottom: 5,
    paddingTop: 10,
    paddingBottom: 15,
    backgroundColor: "blue",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#fff",
  },
  exit: {
    marginRight: 100,
    marginLeft: 100,
    marginTop: 5,
    marginBottom: 5,
    paddingTop: 10,
    paddingBottom: 15,
    backgroundColor: "red",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#fff",
  },
});
