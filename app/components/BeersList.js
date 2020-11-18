import React from 'react';
import { ListItem, Avatar } from 'react-native-elements';
import { FlatList } from 'react-native';

function BeerList({ beersList, navigation }) {
  const keyExtractor = (item, index) => index.toString();
  const renderItem = ({ item }) => (
    <ListItem
      bottomDivider
      onPress={() => navigation.navigate('BeerDetailsScreen', { item })}
    >
      <ListItem.Content>
        <Avatar source={{ uri: item.beerLabel }} />
        <ListItem.Title>{item.beerName}</ListItem.Title>
        <ListItem.Subtitle>{item.breweryName}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );
  return (
    <FlatList
      keyExtractor={keyExtractor}
      data={beersList}
      renderItem={renderItem}
    />
  );
}

export default BeerList;
