import React, { useCallback, useMemo, memo, useEffect } from 'react';
import { Animated, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import {
  CardContainer,
  BackCard,
  FrontCard,
  NumberText,
  StyledImage,
} from './CardStyles';
import images from '../../assets';

const perspective = 500;

const Card = ({ title, id, isOpened, onCardPress, onFlipOpened }) => {
  const animatedValue = useMemo(() => new Animated.Value(0), []);

  useEffect(() => {
    if (isOpened) {
      Animated.spring(animatedValue, {
        toValue: 180,
        friction: 4,
        tension: 10,
      }).start();
      onFlipOpened();
    } else {
      Animated.spring(animatedValue, {
        toValue: 0,
        friction: 4,
        tension: 30,
      }).start();
    }
  }, [isOpened]);

  const frontInterpolate = useMemo(
    () =>
      animatedValue.interpolate({
        inputRange: [0, 180],
        outputRange: ['180deg', '360deg'],
      }),
    []
  );
  const backInterpolate = useMemo(
    () =>
      animatedValue.interpolate({
        inputRange: [0, 180],
        outputRange: ['0deg', '180deg'],
      }),
    []
  );

  const onPress = useCallback(() => {
    if (!isOpened) {
      onCardPress(title, id);
    }
  }, [isOpened, title, id]);

  return (
    <TouchableWithoutFeedback {...{ onPress }} testID="touchable">
      <CardContainer>
        <FrontCard
          style={{
            transform: [
              { perspective },
              {
                rotateY: frontInterpolate,
              },
            ],
          }}
        >
          <NumberText>{title}</NumberText>
        </FrontCard>
        <BackCard
          style={{
            transform: [
              { perspective },
              {
                rotateY: backInterpolate,
              },
            ],
          }}
        >
          <StyledImage source={images.fruit.strawberry} />
        </BackCard>
      </CardContainer>
    </TouchableWithoutFeedback>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.number.isRequired,
  isOpened: PropTypes.bool.isRequired,
  onCardPress: PropTypes.func.isRequired,
  onFlipOpened: PropTypes.func.isRequired,
};

export default memo(Card);
