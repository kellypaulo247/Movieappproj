import {StyleSheet, View} from 'react-native';
import React from 'react';

import {styles} from './Styles';
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


