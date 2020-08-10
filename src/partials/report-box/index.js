import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  Image,
} from "react-native";

import { SwipeListView } from "react-native-swipe-list-view";
import ReportForm from "./report-form";
import store from "../../config/store";
import { Actions } from "react-native-router-flux";

export default function SectionList() {
  const [listData, setListData] = useState(
    Array(3)
      .fill("")
      .map((_, i) => ({
        title: `title${i + 1}`,
        data: [
          ...Array(2)
            .fill("")
            .map((_, j) => ({
              key: `${i}.${j}`,
              text: `${j} of ${i}`,
            })),
        ],
      }))
  );
  const [reportFormVisible, setReportFormVisible] = useState(false);

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };
  const handleClickedBox = (rowKey) => {
    setReportFormVisible(true);
    console.log(rowKey);
    console.log("You touched me");
    Actions.reportRecord;
  };
  const done = (rowKey) => {
    setReportFormVisible(false);
    console.log(reportFormVisible, rowKey);
  };

  const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    const [section] = rowKey.split(".");
    const newData = [...listData];
    const prevIndex = listData[section].data.findIndex(
      (item) => item.key === rowKey
    );
    newData[section].data.splice(prevIndex, 1);
    setListData(newData);
  };

  const onRowDidOpen = (rowKey) => {
    console.log("This row opened", rowKey);
  };

  const renderItem = (data) => (
    <TouchableHighlight
      onPress={() => {
        Actions.reportForm();
        handleClickedBox(data.item.key);
      }}
      style={styles.rowFront}
      underlayColor={"#AAA"}
    >
      <View style={styles.boxContainer}>
        {/* ADD FORM HERE */}
        {/* <ReportForm
          userEmployeeNumber={data.item.key}
          visible={reportFormVisible}
          close={() => done(data.item.key)}
        ></ReportForm> */}
        <View style={styles.boxContainer1}>
          <Text style={styles.boxText1}>{data.item.text}</Text>
        </View>
        <View style={styles.boxContainer2}>
          <View style={styles.textContainer}>
            <Text style={styles.boxText2}>
              All clear for the hour. No activity goin on All clear for the
              hour.No activity goin on
            </Text>
          </View>
          <View style={styles.thumbNailView}>
            <Image
              source={require("./my-icon.jpg")}
              style={{ width: 40, height: 40, margin: 1 }}
            />
            <Image
              source={require("./eid.jpeg")}
              style={{ width: 40, height: 40, margin: 1 }}
            />
            <Image
              source={require("./IMG_0691.jpeg")}
              style={{ width: 40, height: 40, margin: 1 }}
            />
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );

  const renderHiddenItem = (data, rowMap) => (
    <View style={styles.rowBack}>
      <Text>Left</Text>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnLeft]}
        onPress={() => closeRow(rowMap, data.item.key)}
      >
        <Text style={styles.backTextWhite}>Close</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnRight]}
        onPress={() => deleteRow(rowMap, data.item.key)}
      >
        <Text style={styles.backTextWhite}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  const renderSectionHeader = ({ section }) => (
    <Text style={styles.sectionTitleText}>{section.title}</Text>
  );

  return (
    <SwipeListView
      useSectionList
      sections={listData}
      renderItem={renderItem}
      renderHiddenItem={renderHiddenItem}
      renderSectionHeader={renderSectionHeader}
      leftOpenValue={75}
      rightOpenValue={-150}
      previewRowKey={"0"}
      previewOpenValue={-40}
      previewOpenDelay={3000}
      onRowDidOpen={onRowDidOpen}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  backTextWhite: {
    color: "#FFF",
  },
  sectionTitleText: {
    padding: 10,
    fontSize: 20,
  },
  rowFront: {
    backgroundColor: "white",
    shadowRadius: 10,
    shadowColor: "#000",
    borderBottomWidth: 5,
    borderRadius: 5,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.65,
    elevation: 8,
    alignItems: "center",
    borderBottomColor: "#2ed397",
    justifyContent: "center",
    height: 150,
    margin: 10,
  },
  rowBack: {
    backgroundColor: "white",
    shadowRadius: 10,
    shadowColor: "#000",
    borderRadius: 5,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.65,
    elevation: 8,
    alignItems: "center",
    justifyContent: "center",
    height: 150,
    margin: 10,
    paddingLeft: 15,
    margin: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  backRightBtn: {
    alignItems: "center",
    bottom: 0,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    width: 75,
  },
  backRightBtnLeft: {
    backgroundColor: "blue",
    right: 75,
  },
  backRightBtnRight: {
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: "red",
    right: 0,
  },
  boxContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  boxContainer1: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    padding: 8,
  },
  boxContainer2: {
    flex: 3,
    flexDirection: "column",
    justifyContent: "space-around",
    paddingTop: 15,
  },
  textContainer: {
    flex: 1,
    flexDirection: "row",
  },
  boxText1: {
    flex: 1,
    fontSize: 30,
    flexWrap: "wrap",
  },
  boxText2: {
    flex: 1,
    flexWrap: "wrap",
    flexShrink: 1,
    fontSize: 15,
    paddingTop: 10,
  },
  thumbNailView: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    justifyContent: "flex-start",
  },
});
