import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import {colors} from '../../assets/colors';

type TProps = {
  tab: {
    tab: string;
    title: string;
  };
  activeTab: string;
  updateActiveTab: (value: string) => void;
};

const TabButton: React.FC<TProps> = ({activeTab, tab, updateActiveTab}) => {
  return (
    <View style={{gap: 6}} key={tab.tab}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => updateActiveTab(tab.tab)}>
        <Text
          style={{
            color: colors.white,
            fontSize: 16,
            fontWeight: '600',
          }}>
          {tab.title}
        </Text>
      </TouchableOpacity>
      {activeTab === tab.tab && (
        <View
          style={{
            height: 3,
            width: '100%',
            backgroundColor: colors.secondary,
          }}
        />
      )}
    </View>
  );
};

export default TabButton;
