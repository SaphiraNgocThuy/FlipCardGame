import styled from 'styled-components/native';
import { getStatusBarHeight } from '../../utils/helper';
import { padding } from '../../utils/commonStyles';

export const GameView = styled.View`
  padding-top: ${getStatusBarHeight()}px;
  flex: 1;
`;

export const RowView = styled.View`
  padding-top: ${padding.sm}px;
  flex-direction: row;
  justify-content: space-between;
`;

export const CardsView = styled.View`
  padding: ${padding.sm}px;
  flex-direction: row;
  flex-wrap: wrap;
  flex-grow: 1;
  align-content: stretch;
`;
