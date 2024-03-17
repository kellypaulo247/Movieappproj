import {Text, View} from 'react-native';
import React from 'react';

import {textShortener} from '../../utils/stringShortner';
import {colors} from '../../assets/colors';

type Props = {value: string};

const ViewMore = ({value}: Props) => {
  const [more, setMore] = React.useState(false);

  return (
    <View>
      {more ? (
        <Text style={{color: colors.white}}>{value}</Text>
      ) : (
        <>
          <Text style={{color: colors.white}}>{textShortener(value, 100)}</Text>
        </>
      )}

      <Text
        style={{color: colors.blue, fontSize: 12, fontWeight: '600'}}
        onPress={() => {
          setMore(!more);
        }}>
        {more ? 'Less' : 'More'}
      </Text>
    </View>
  );
};

export default ViewMore;
