import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

function App() {
  return (
    <View style={styles.app}>
      <Text>React Native Template</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  welcome: {
    width: 300,
    height: 200,
    backgroundColor: "#ecf0f1",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  wText: {
    color: "#34495e",
    fontWeight: "900",
    fontSize: 25,
    textAlign: "center"
  }
});

export default App;
