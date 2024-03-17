import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import {IMovieDetails} from '../../interfaces/movie';

import {getImage} from '../../utils/get-image';
import {deviceHeight} from '../../utils/device-dimensions';

import {CalendarIcon, StarIcon, TicketIcon, TimeIcon} from '../../assets/icons';
import {colors} from '../../assets/colors';

import {useTabContext} from '../../context/tab';

import AboutComponent from './about-component';
import ReviewsComponent from './reviews-component';
import CastComponent from './cast-component';
import FastImage from 'react-native-fast-image';
import {movieDetailsTab} from '../../constant/tab';
import {MovieDetailsTabs} from '../tabs/movie-details-tabs';

type Props = IMovieDetails;

export const MovieDetailsComponent = (props: Props) => {
  const {activeDetailsTab, updateActiveDetailsTab} = useTabContext();

  return (
    <View style={styles.componentBody}>
      <View
        style={{
          position: 'relative',
        }}>
        <FastImage
          source={{uri: getImage(props.backdrop_path), priority: 'high'}}
          style={styles.backdrop}
        />

        <View style={styles.ratingContainer}>
          <Image source={StarIcon} />
          <Text>
            {props.vote_average?.toLocaleString('en', {
              maximumFractionDigits: 1,
            })}
          </Text>
        </View>
      </View>
      <View style={styles.posterContainer}>
        <FastImage
          source={{uri: getImage(props.poster_path)}}
          style={styles.poster}
        />
        <Text style={styles.title}>{props?.title}</Text>
      </View>

      <View style={styles.detailContainer}>
        <View style={styles.detail}>
          <Image source={CalendarIcon} style={styles.detailIcon} />
          <Text style={{color: colors.secondary}}>
            {' '}
            {new Date(props?.release_date).getFullYear()}{' '}
          </Text>
        </View>
        <View style={styles.verticalSeparator} />
        <View style={styles.detail}>
          <Image source={TimeIcon} style={styles.detailIcon} />
          <Text style={{color: colors.secondary}}>
            {' '}
            {props?.runtime} Minutes{' '}
          </Text>
        </View>
        <View style={styles.verticalSeparator} />
        <View style={styles.detail}>
          <Image source={TicketIcon} style={styles.detailIcon} />
          <Text style={{color: colors.secondary}}></Text>
        </View>
      </View>

      <MovieDetailsTabs id={props.id} overview={props.overview} />
    </View>
  );
};

const styles = StyleSheet.create({
  componentBody: {
    width: '100%',
    flex: 1,
  },
  backdrop: {
    height: deviceHeight / 3.5,
    width: '100%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  ratingContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 5,
    gap: 8,
    borderRadius: 8,
  },
  posterContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 12,
    alignSelf: 'center',
    marginTop: -20,
    width: '90%',
  },
  poster: {
    height: 140,
    width: 95,
    borderRadius: 16,
    marginTop: -60,
  },
  title: {
    color: 'white',
    width: '45%',
    fontSize: 18,
    fontWeight: '600',
  },
  detailContainer: {
    height: 30,
    width: '90%',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
    gap: 8,
  },
  detailIcon: {width: 20, height: 20, tintColor: colors.secondary},
  detail: {flexDirection: 'row', gap: 4},
  verticalSeparator: {
    height: '80%',
    width: 1,
    backgroundColor: colors.secondary,
  },
});
