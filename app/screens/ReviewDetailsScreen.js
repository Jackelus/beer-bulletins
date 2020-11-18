import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

function ReviewDetailsScreen({ route }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text h1> {route.params.item.beerName} </Text>
      <ScrollView>
        <Text> {route.params.item.beerDescription} </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    padding: 50,
    margin: 60,
  },
});

export default ReviewDetailsScreen;
