import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';

import {homeTabs} from '../../constant/tab';
import {colors} from '../../assets/colors';
import {useTabContext} from '../../context/tab';
import MoviesWrapper from '../movies';
import axios from 'axios';
import {IMovieResult, IMoviesListResponse} from '../../interfaces/movie-lists';
import {api} from '../../api';
import {endPoints} from '../../api/endpoints';
import TabButton from './tab-button';

type TDataProps = {
  nowPlaying: IMovieResult[];
  upcoming: IMovieResult[];
  topRated: IMovieResult[];
  popular: IMovieResult[];
};

const HomeTabs = () => {
  const {updateActiveHomeTab, activeHomeTab} = useTabContext();

  const [data, setData] = React.useState<TDataProps>();

  async function getDatas() {
    const nowPlaying = api.get<IMoviesListResponse>(endPoints.nowPlaying);
    const upcoming = api.get<IMoviesListResponse>(endPoints.upcoming);
    const popular = api.get<IMoviesListResponse>(endPoints.popular);
    const topRated = api.get<IMoviesListResponse>(endPoints.topRated);

    await axios.all([nowPlaying, upcoming, popular, topRated]).then(
      axios.spread((response1, response2, response3, response4) => {
        setData({
          nowPlaying: response1.data.results,
          upcoming: response2.data.results,
          popular: response3.data.results,
          topRated: response4.data.results,
        });
      }),
    );
  }

  useEffect(() => {
    getDatas();
  }, []);

  return (
    <View style={{width: '100%', marginTop: 20, gap: 20}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{flexDirection: 'row', gap: 26}}>
          {homeTabs.map(tab => (
            <TabButton
              activeTab={activeHomeTab}
              tab={tab}
              updateActiveTab={() => updateActiveHomeTab(tab.tab)}
              key={tab.tab}
            />
          ))}
        </View>
      </ScrollView>

      <View>
        {
          {
            nowPlaying: <MoviesWrapper data={data?.nowPlaying} />,
            upcoming: <MoviesWrapper data={data?.upcoming} />,
            popular: <MoviesWrapper data={data?.popular} />,
            toprated: <MoviesWrapper data={data?.topRated} />,
          }[activeHomeTab]
        }
      </View>
    </View>
  );
};

export default HomeTabs;

const styles = StyleSheet.create({});
