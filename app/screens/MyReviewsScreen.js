import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { Text } from 'react-native-elements';
import ReviewList from '../components/ReviewList';

function MyReviewsScreen(props) {
  const [reviewsList, setReviewsList] = useState({});

  useEffect(() => {
    fetch('http://192.168.1.58:3000/reviews')
      .then((response) => response.json())
      .then((response) => setReviewsList(response));
  }, []);

  return (
    <SafeAreaView>
      <Text h1>My Reviews</Text>
      <ReviewList reviewsList={reviewsList} navigation={props.navigation} />
    </SafeAreaView>
  );
}

export default MyReviewsScreen;
