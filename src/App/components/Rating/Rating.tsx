import React from 'react';
import { Text, View } from 'react-native';

import { getStyles } from './styles';

interface IProps {}

export const Rating: React.FC<IProps> = ({}) => {
  const s = getStyles({});

  return (
    <View>
      <Text>⭐️⭐️⭐️⭐️⭐️</Text>
    </View>
  );
};
