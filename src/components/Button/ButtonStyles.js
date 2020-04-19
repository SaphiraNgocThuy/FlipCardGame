import styled from "styled-components/native";
import { padding, fontSize, borderRadius } from "../../utils/commonStyles";
import { theme } from "../../utils/theme";

export const ButtonContainer = styled.TouchableOpacity`
  padding: ${padding.md}px;
  background-color: ${theme.secondPrimary};
  justify-content: center;
  ${(props) =>
    props.left
      ? `border-top-right-radius: ${borderRadius}px; border-bottom-right-radius: ${borderRadius}px;
      padding-right: ${padding.lg}px;`
      : `border-radius: ${borderRadius}px;`}
`;

export const ButtonText = styled.Text`
  font-size: ${fontSize.lg}px;
  font-weight: bold;
  color: ${theme.bright};
`;
