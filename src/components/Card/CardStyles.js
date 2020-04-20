import styled from 'styled-components/native';
import { theme } from '../../utils/theme';
import { padding, fontSize, borderRadius } from '../../utils/commonStyles';
import { Animated } from 'react-native';

export const CardContainer = styled.View`
  flex-grow: 1;
  flex-basis: 25%;
  margin: ${padding.sm}px;
`;

const MainCard = styled(Animated.View)`
  position: absolute;
  backface-visibility: hidden;
  width: 100%;
  height: 100%;
  border-radius: ${borderRadius}px;
  justify-content: center;
  align-items: center;
`;

export const FrontCard = styled(MainCard)`
  background-color: ${theme.primary};
`;

export const BackCard = styled(MainCard)`
  background-color: ${theme.darkGrey};
`;

export const NumberText = styled.Text`
  font-size: ${fontSize.xl}px;
  color: ${theme.bright};
`;

export const StyledImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 80%;
  height: 80%;
`;
