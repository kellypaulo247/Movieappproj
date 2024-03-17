import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';

import {useApiFetch} from '../../hook/api-fetch';
import {endPoints} from '../../api/endpoints';

import {IMovieCast} from '../../interfaces/movie-cast';

import Cast from '../cast';

import {deviceHeight} from '../../utils/device-dimensions';

type Props = {
  id: number;
};

const CastComponent = (props: Props) => {
  const [cast, setCast] = React.useState<IMovieCast['cast']>();

  async function getCast() {
    const res = await useApiFetch<IMovieCast>(
      endPoints.movieDetails + props.id + endPoints.credits,
    );
    setCast(res.data.cast);
  }

  useEffect(() => {
    getCast();
  }, [props.id]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollContent}>
      <View style={styles.castContainer}>
        {cast?.map(cast => (
          <Cast name={cast.name} path={cast.profile_path} key={cast.id} />
        ))}
      </View>
    </ScrollView>
  );
};

export default CastComponent;

const styles = StyleSheet.create({
  scrollContent: {
    alignItems: 'center',
    paddingBottom: deviceHeight / 1.8,
  },
  castContainer: {
    flexDirection: 'row',
    gap: 18,
    flexWrap: 'wrap',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
