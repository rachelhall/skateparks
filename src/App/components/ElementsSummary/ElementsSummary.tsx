import React from 'react';
import { FlatList, Text, View } from 'react-native';

import { getStyles } from './styles';

interface IProps {
  elements: string[];
}

export const ElementsSummary: React.FC<IProps> = ({ elements }) => {
  const s = getStyles({});

  const element = ({ item }) => {
    return <Text>{item}</Text>;
  };

  const itemSeparator = () => {
    return <Text>, </Text>;
  };

  return (
    <View>
      <FlatList
        data={elements}
        renderItem={element}
        horizontal
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
  );
};
