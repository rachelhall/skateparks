import { Dimensions, StyleSheet } from 'react-native';
import { borderRadius, ELEMENTS } from '../../../styles/elements';
import { FONTS } from '../../../styles/fonts';
import { SPACE } from '../../../styles/space';

interface IProps {}
const dimensions = Dimensions.get('window');

export const getStyles = ({}: IProps) =>
  StyleSheet.create({
    container: {
      overflow: 'hidden',
      padding: SPACE.medium,
    },
    heading: {
      marginVertical: SPACE.large,
    },

    title: {
      fontSize: FONTS.xLarge,
    },
    subtitle: {
      fontSize: FONTS.medium,
    },
    body: {
      fontSize: FONTS.small,
    },

    image: {
      resizeMode: 'contain',
      height: Math.round((dimensions.width * 9) / 16),
      width: dimensions.width,
      borderRadius: borderRadius.small,
    },
  });
