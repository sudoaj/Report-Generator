import React from "react";
import { connect } from "react-redux";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  Image,
} from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import { Actions } from "react-native-router-flux";
import { storeReport } from "../../config/store/report/actions";
import store from "../../config/store";

class SectionList extends React.Component {
  state = {
    listData: this.props.report,
  };

  closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      console.log("test", { rowKey: rowKey });
      rowMap[rowKey].closeRow();
    }
  };
  handleClickedBox = (rowKey) => {
    console.log(rowKey);
    console.log("You touched me");
  };

  deleteRow = (rowMap, rowKey) => {
    this.closeRow(rowMap, rowKey);
    [this.section] = rowKey.split(".");
    this.newData = [...this.state.listData];
    this.prevIndex = this.state.listData[this.section].data.findIndex(
      (item) => item.key === rowKey
    );
    this.newData[this.section].data.splice(this.prevIndex, 1);
    // this.props.storeReport(this.newData);
    this.setState({ listData: this.newData });
  };

  onRowDidOpen = (rowKey) => {
    console.log("This row opened", rowKey);
  };

  renderItem = (data) => (
    <TouchableHighlight
      onPress={() => {
        Actions.reportForm({ data: data.item });
        this.handleClickedBox(data.item.key);
      }}
      style={styles.rowFront}
      underlayColor={"#AAA"}
    >
      <View style={styles.boxContainer}>
        {/* ADD FORM HERE */}
        <View style={styles.boxContainer1}>
          <Text style={styles.boxText1}>{data.item.time}</Text>
        </View>
        <View style={styles.boxContainer2}>
          <View style={styles.textContainer}>
            <Text style={styles.boxText2}>{data.item.text}</Text>
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

  renderHiddenItem = (data, rowMap) => (
    <View style={styles.rowBack}>
      <Text>Left</Text>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnLeft]}
        onPress={() => this.closeRow(rowMap, data.item.key)}
      >
        <Text style={styles.backTextWhite}>Close</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnRight]}
        onPress={() => this.deleteRow(rowMap, data.item.key)}
      >
        <Text style={styles.backTextWhite}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  renderSectionHeader = ({ section }) => (
    <Text style={styles.sectionTitleText}>{section.title}</Text>
  );

  render() {
    return (
      <SwipeListView
        useSectionList
        sections={this.state.listData}
        renderItem={this.renderItem}
        renderHiddenItem={this.renderHiddenItem}
        renderSectionHeader={this.renderSectionHeader}
        leftOpenValue={75}
        rightOpenValue={-150}
        previewRowKey={"0"}
        previewOpenValue={-40}
        previewOpenDelay={3000}
        onRowDidOpen={this.onRowDidOpen}
      />
    );
  }
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

const mapStateToProps = (state) => {
  return {
    report: state.report.report,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    storeReport: (report) => dispatch(storeReport(report)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SectionList);

