import {StyleSheet} from 'react-native';
import {colors} from '../../assets/colors';
import {deviceHeight, deviceWidth} from '../../utils/device-dimensions';

export const styles = StyleSheet.create({
    body: {
      flex: 1,
      position: 'relative',
      alignItems: 'center',
    },
    infoContainer: {
      position: 'absolute',
      width: '100%',
      left: deviceWidth / 4,
      bottom: deviceHeight / 2.5,
    },
  });