import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { SearchBar, Text } from 'react-native-elements';
import BeerList from '../components/BeersList';

function HomeScreen(props) {
  const [beersList, setBeersList] = useState({});
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('http://192.168.1.58:3000/beers')
      .then((response) => response.json())
      .then((response) => setBeersList(response));
  }, []);

  return (
    <SafeAreaView>
      <SearchBar
        placeholder="Search for a beer or brewery"
        onChangeText={(searchText) => {
          setSearch(searchText);
        }}
        value={search}
        platform="ios"
        style={styles.SearchBar}
      />
      <Text h4>New Beers:</Text>
      <BeerList beersList={beersList} navigation={props.navigation} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  searchBar: {
    color: '#17BEBB',
  },
});

export default HomeScreen;
