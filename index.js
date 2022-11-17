import React from "react";
import { AppRegistry, StyleSheet, Text, View, Button } from "react-native";

import { NativeModules } from "react-native";

const RNHighScores = ({ scores }) => {
  const { HelloWorldModule } = NativeModules;

  const contents = scores.map((score) => (
    <Text key={score.name}>
      {score.name}:{score.value}
      {"\n"}
    </Text>
  ));
  return (
    <View style={styles.container}>
      <Text style={styles.highScoresTitle}>2048 High Score !</Text>
      <Text style={styles.scores}>{contents}</Text>
      <Button
        title="Press me to trigger success"
        color="green"
        onPress={() => HelloWorldModule.finish(true)}
      />
      <Button
        title="Send Error"
        color="red"
        onPress={() => HelloWorldModule.setError("Error from React Native")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  highScoresTitle: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  scores: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
});

// Module name
AppRegistry.registerComponent("MyReactNativeApp", () => RNHighScores);
