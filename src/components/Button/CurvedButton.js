import React, { memo } from "react";
import PropTypes from "prop-types";
import { ButtonText, ButtonContainer } from "./ButtonStyles";

const CurvedButton = ({ title, onPress, left }) => {
  return (
    <ButtonContainer {...{ onPress, left }}>
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  );
};

CurvedButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  left: PropTypes.bool,
};

export default memo(CurvedButton);
