import styled from "styled-components/native";
import { padding, fontSize, borderRadius } from "../../utils/commonStyles";
import { theme } from "../../utils/theme";

export const BadgeContainer = styled.View`
  padding: ${padding.md}px ${padding.lg}px;
  margin-right: ${padding.md}px;
  border-radius: ${borderRadius}px;
  border: 2px solid ${theme.darkGrey};
  justify-content: center;
`;

export const BadgeText = styled.Text`
  font-size: ${fontSize.lg}px;
  font-weight: bold;
  color: ${theme.darkGrey};
`;
