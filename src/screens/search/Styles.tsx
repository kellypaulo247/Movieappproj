import {StyleSheet} from 'react-native';
import {deviceHeight, deviceWidth} from '../../utils/device-dimensions';

export const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  contentContainer: {
    flexDirection: 'row',
    flexGrow: 1,
    flexWrap: 'wrap',
    gap: 4,
    alignItems: 'center',
    marginTop: 16,
    paddingBottom: deviceHeight / 4.8,
  },
  image: {
    width: 200,
    height: 160,
  },
  noContentContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: deviceWidth / 2,
  },
  scrollContentContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
