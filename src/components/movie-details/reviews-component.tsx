import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';

import {endPoints} from '../../api/endpoints';
import {useApiFetch} from '../../hook/api-fetch';

import {IMovieReviews} from '../../interfaces/movie-review';

import {deviceHeight} from '../../utils/device-dimensions';

import Review from '../review';

type Props = {
  id: number;
};

const ReviewsComponent = ({id}: Props) => {
  const [reviews, setReviews] = React.useState<IMovieReviews['results']>([]);

  async function getReviews() {
    const res = await useApiFetch<IMovieReviews>(
      endPoints.movieDetails + id + endPoints.reviews,
    );

    setReviews(res.data.results);
  }

  useEffect(() => {
    getReviews();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={{width: '100%', gap: 16}}>
        {reviews?.map(review => (
          <Review key={review.id} {...review} />
        ))}
      </View>
    </ScrollView>
  );
};

export default ReviewsComponent;

const styles = StyleSheet.create({
  scrollContent: {
    alignItems: 'center',
    paddingBottom: deviceHeight / 1.8,
  },
});
