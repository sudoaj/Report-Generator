import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { processFontFamily } from "expo-font";

export default function TopTime() {
	const [date, setDate] = useState(new Date());

	useEffect(() => {
		var timerID = setInterval(() => tick(), 1000);

		return function cleanup() {
			clearInterval(timerID);
		};
	});
	function tick() {
		setDate(new Date());
	}

	return (
		<View style={styles.container}>
			<Text style={styles.topTimeText}>
				{date.getHours().toString().length > 1
					? date.getHours()
					: "0" + date.getHours().toString()}
				{":"}
				{date.getMinutes().toString().length > 1
					? date.getMinutes()
					: "0" + date.getMinutes().toString()}
				{":"}
				{date.getSeconds().toString().length > 1
					? date.getSeconds()
					: "0" + date.getSeconds().toString()}
			</Text>
			<Text style={styles.bottomTimeText}>
				{date.toLocaleTimeString([], {
					hour: "2-digit",
					minute: "2-digit",
					second: "2-digit",
				})}
			</Text>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		marginTop: -130,
		backgroundColor: "#fff",
	},
	topTimeText: {
		margin: 10,
		marginBottom: 0,
		padding: 5,
		paddingBottom: 0,
		fontSize: 25,
		fontWeight: "bold",
	},
	bottomTimeText: {
		margin: 10,
		marginTop: 0,
		padding: 5,
		paddingTop: 0,
		fontSize: 20,
		fontWeight: "100",
		fontStyle: "italic",
	},
});
