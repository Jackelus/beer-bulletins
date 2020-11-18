import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Input, Rating, Button } from 'react-native-elements';

function ReviewForm({ route, toggleOverlay }) {
  const [rating, setRating] = useState('');
  const [allReviews, setAllReviews] = useState('');
  const [review, setReview] = useState('');
  const [beerId, setBeerId] = useState(route.params.item.beerId);

  function ratingCompleted(ratingScore) {
    setRating(ratingScore);
  }
  function handleSubmit() {
    createReview({ rating, review, beerId });
    setReview('');
    toggleOverlay();
  }

  function createReview(body) {
    fetch('http://192.168.1.58:3000/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }).then((response) => {
      response.json().then((res) => {
        setAllReviews([...allReviews, res]);
      });
    });
  }

  return (
    <View>
      <Text> {route.params.item.beerName} </Text>

      <Input
        placeholder="Write your review.."
        multiline={true}
        onChangeText={(value) => setReview(value)}
      />
      <Rating showRating onFinishRating={ratingCompleted} />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

export default ReviewForm;
