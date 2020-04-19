import styled from "styled-components/native";
import { padding, fontSize } from "../../utils/commonStyles";
import { theme } from "../../utils/theme";

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
`;

export const StyledModal = styled.Modal.attrs({
  animationType: "fade",
  transparent: true,
})``;

export const DetailContainer = styled.View`
  padding: ${padding.lg}px;
  background-color: ${theme.bright};
  border-radius: 30px;
  align-items: center;
  elevation: 10;
`;

export const BigText = styled.Text`
  padding-top: ${padding.md}px;
  font-size: ${fontSize.lg}px;
  color: ${theme.darkGrey};
`;

export const CongratsText = styled(BigText)`
  padding-bottom: ${padding.md}px;
  font-size: ${fontSize.md}px;
`;

export const StyledImage = styled.Image.attrs({
  resizeMode: "cover",
})`
  width: 100px;
  height: 100px;
`;
