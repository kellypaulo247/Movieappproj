import {StyleSheet, View} from 'react-native';
import React from 'react';

import {CustomHeader} from '../../components/header';
import {EmpyWishList} from '../../components/info/empty-wishlist';
import {deviceHeight, deviceWidth} from '../../utils/device-dimensions';

const WatchListScreen = () => {
  return (
    <View style={styles.body}>
      <CustomHeader title="WatchList" isTitleOnly />
      <View style={styles.infoContainer}>
        <EmpyWishList />
      </View>
    </View>
  );
};

export default WatchListScreen;

const styles = StyleSheet.create({
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
