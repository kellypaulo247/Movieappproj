import {View, Text, StyleSheet, Image} from 'react-native';

import {IMovieDetails} from '../../interfaces/movie';
import {getImage} from '../../utils/get-image';
import {deviceHeight} from '../../utils/device-dimensions';
import {CalendarIcon, StarIcon, TicketIcon, TimeIcon} from '../../assets/icons';
import {colors} from '../../assets/colors';

type Props = IMovieDetails;

export const MovieDetailsComponent = (props: Props) => {
  return (
    <View style={styles.componentBody}>
      <View
        style={{
          position: 'relative',
        }}>
        <Image
          source={{uri: getImage(props.backdrop_path)}}
          style={{
            height: deviceHeight / 3.5,
            width: '100%',
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
        />

        <View
          style={{
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
          }}>
          <Image source={StarIcon} />
          <Text>
            {props.vote_average?.toLocaleString('en', {
              maximumFractionDigits: 1,
            })}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-end',
          gap: 12,
          alignSelf: 'center',
          marginTop: -20,
          width: '90%',
        }}>
        <Image
          source={{uri: getImage(props.poster_path)}}
          style={{
            height: 140,
            width: 95,
            borderRadius: 16,
            marginTop: -60,
          }}
        />
        <Text
          style={{
            color: 'white',
            width: '45%',
            fontSize: 18,
            fontWeight: '600',
          }}>
          {props.title}
        </Text>
      </View>

      <View
        style={{
          height: 30,
          width: '90%',
          flexDirection: 'row',
          alignSelf: 'center',
          justifyContent: 'center',
          marginTop: 20,
          gap: 8,
        }}>
        <View style={{flexDirection: 'row', gap: 4}}>
          <Image
            source={CalendarIcon}
            style={{width: 20, height: 20, tintColor: colors.secondary}}
          />
          <Text style={{color: colors.secondary}}>
            {' '}
            {new Date(props.release_date).getFullYear()}{' '}
          </Text>
        </View>
        <View
          style={{height: '80%', width: 1, backgroundColor: colors.secondary}}
        />
        <View style={{flexDirection: 'row', gap: 4}}>
          <Image
            source={TimeIcon}
            style={{width: 20, height: 20, tintColor: colors.secondary}}
          />
          <Text style={{color: colors.secondary}}>
            {' '}
            {props.runtime} Minutes{' '}
          </Text>
        </View>
        <View
          style={{height: '80%', width: 1, backgroundColor: colors.secondary}}
        />
        <View style={{flexDirection: 'row', gap: 4}}>
          <Image
            source={TicketIcon}
            style={{width: 20, height: 20, tintColor: colors.secondary}}
          />
          <Text style={{color: colors.secondary}}>{props.genres[0].name}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  componentBody: {
    width: '100%',
    flex: 1,
  },
});
