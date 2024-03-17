import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {about: string};

const AboutComponent = ({about}: Props) => {
  return (
    <View style={{width: '100%'}}>
      <Text style={styles.text}>{about}</Text>
    </View>
  );
};

export default AboutComponent;

const styles = StyleSheet.create({
  text: {color: 'white', fontSize: 14, fontWeight: '400'},
});
