import React from 'react';
import { Image, ImageSourcePropType, Text, View } from 'react-native';
import { ILocation } from '../../../../graphql/models/location';
import { ElementsSummary } from '../ElementsSummary';
import { Rating } from '../Rating';

import { getStyles } from './styles';

interface IProps {
  name: string;
  location: ILocation;
  elements: string[];
  image: ImageSourcePropType;
}

export const SkateparkSummaryCard: React.FC<IProps> = ({
  name,
  location,
  elements,
  image,
}) => {
  const s = getStyles({});

  return (
    <View style={s.container}>
      <Image style={s.image} source={image} />
      <View style={s.heading}>
        <Text style={s.title}>{name}</Text>
        <Text style={s.subtitle}>{`${location.city}, ${location.state}`}</Text>
      </View>
      <ElementsSummary elements={elements} />
      <Rating />
    </View>
  );
};
