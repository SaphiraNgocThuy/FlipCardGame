import styled from "styled-components/native";
import { theme } from "../../utils/theme";
import { getStatusBarHeight } from "../../utils/helper";
import { padding } from "../../utils/commonStyles";
import { FlatList } from "react-native";

export const GameView = styled.View`
  padding-top: ${getStatusBarHeight()}px;
  flex: 1;
`;

export const RowView = styled.View`
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
