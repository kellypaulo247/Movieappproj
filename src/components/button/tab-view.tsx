import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {colors} from '../../assets/colors';

interface TabViewProps {
  focused: boolean;
  name?: string;
  icon: any;
}

export const TabView: React.FC<TabViewProps> = ({focused, name, icon}) => {
  return (
    <View>
      <View style={styles.tabContainer}>
        <Image
          source={icon}
          style={{
            width: 20,
            height: 20,
            tintColor: focused ? `${colors.blue}` : `${colors.secondary}`,
          }}
        />
        {name ? (
          <Text
            style={{
              color: focused ? `${colors.primary}` : `${colors.secondary}`,
              fontSize: 10,
            }}>
            {name}
          </Text>
        ) : (
          focused && <View style={styles.activeCircle} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeCircle: {
    height: 7,
    width: 7,
    borderRadius: 100,
    marginTop: 10,
    backgroundColor: colors.blue,
  },
});
