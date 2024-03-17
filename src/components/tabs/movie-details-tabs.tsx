import {View} from 'react-native';
import React from 'react';

import {homeTabs, movieDetailsTab} from '../../constant/tab';

import {useTabContext} from '../../context/tab';

import TabButton from './tab-button';

import AboutComponent from '../movie-details/about-component';
import ReviewsComponent from '../movie-details/reviews-component';
import CastComponent from '../movie-details/cast-component';

type TDataProps = {
  id: number;
  overview: string;
};

export const MovieDetailsTabs: React.FC<TDataProps> = ({id, overview}) => {
  const {updateActiveDetailsTab, activeDetailsTab} = useTabContext();

  return (
    <View style={{width: '90%', alignSelf: 'center', marginTop: 20}}>
      <View style={{flexDirection: 'row', gap: 26}}>
        {movieDetailsTab.map(tab => (
          <TabButton
            activeTab={activeDetailsTab}
            tab={tab}
            updateActiveTab={() => updateActiveDetailsTab(tab.tab)}
            key={tab.tab}
          />
        ))}
      </View>
      <View style={{width: '100%', marginTop: 20}}>
        {
          {
            about: <AboutComponent about={overview} />,
            review: <ReviewsComponent id={id} />,
            cast: <CastComponent id={id} />,
          }[activeDetailsTab]
        }
      </View>
    </View>
  );
};
