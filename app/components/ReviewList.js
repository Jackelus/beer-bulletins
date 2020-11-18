import React from 'react';
import { ListItem } from 'react-native-elements';
import { FlatList } from 'react-native';

function ReviewList({ reviewsList, navigation }) {
  const keyExtractor = (item, index) => index.toString();
  const renderItem = ({ item }) => (
    <ListItem
      bottomDivider
      onPress={() => navigation.navigate('ReviewDetailsScreen', { item })}
    >
      <ListItem.Content>
        <ListItem.Title>{item.rating}</ListItem.Title>
        <ListItem.Subtitle>{item.review}</ListItem.Subtitle>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );

  return (
    <FlatList
      keyExtractor={keyExtractor}
      data={reviewsList}
      renderItem={renderItem}
    />
  );
}

export default ReviewList;
