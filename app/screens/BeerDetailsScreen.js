import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { Text, Image, Button, Overlay } from 'react-native-elements';
import ReviewForm from '../components/ReviewForm';

function BeerDetailsScreen({ route }) {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text h1> {route.params.item.beerName} </Text>
        <Image
          source={{ uri: route.params.item.beerLabel }}
          style={{ width: 100, height: 100 }}
        />
      </View>
      <Button title="Review" onPress={toggleOverlay} />

      <Overlay
        isVisible={visible}
        onBackdropPress={toggleOverlay}
        overlayStyle={styles.overlay}
      >
        <ReviewForm
          route={route}
          toggleOverlay={toggleOverlay}
          visible={visible}
        />
      </Overlay>
      <Text h2> {route.params.item.breweryName} </Text>
      <Image
        source={{ uri: route.params.item.breweryLabel }}
        style={{ width: 50, height: 50 }}
      />
      <Text> ABV: {route.params.item.beerAbv}% </Text>
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

export default BeerDetailsScreen;
