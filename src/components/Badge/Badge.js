import React, { memo } from "react";
import PropTypes from "prop-types";
import { BadgeText, BadgeContainer } from "./BadgeStyles";

const CurvedBadge = ({ steps }) => {
  return (
    <BadgeContainer>
      <BadgeText>STEPS: {steps}</BadgeText>
    </BadgeContainer>
  );
};

CurvedBadge.propTypes = {
  steps: PropTypes.number.isRequired,
};

export default memo(CurvedBadge);
