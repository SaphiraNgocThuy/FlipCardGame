import React from "react";
import PropTypes from "prop-types";
import {
  ModalContainer,
  CongratsText,
  StyledModal,
  DetailContainer,
  StyledImage,
  BigText,
} from "./CongratsModalStyles";
import images from "../../assets";
import CurvedButton from "../Button/CurvedButton";

const CongratsModal = ({ visible, onPress, steps }) => {
  return (
    <StyledModal {...{ visible }}>
      <ModalContainer>
        <DetailContainer>
          <StyledImage source={images.congratulation} />
          <BigText>Congratulation!!</BigText>
          <CongratsText>You win this game by {steps} steps</CongratsText>
          <CurvedButton title="One more game?" {...{ onPress }} />
        </DetailContainer>
      </ModalContainer>
    </StyledModal>
  );
};

CongratsModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
  steps: PropTypes.number.isRequired,
};

export default CongratsModal;
