import React, { memo, useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { restart, pressCard, flipOpened } from "../../store/actions";
import { GameView, RowView, CardsView } from "./GameStyles";
import CurvedButton from "../../components/Button/CurvedButton";
import CurvedBadge from "../../components/Badge/Badge";
import Card from "../../components/Card/Card";
import CongratsModal from "../../components/Modal/CongratsModal";

const Game = () => {
  const dispatch = useDispatch();
  const {
    steps,
    numbers,
    resolved,
    firstSelected,
    secondSelected,
  } = useSelector((state) => state);
  const win = useMemo(() => resolved.length === 12, [resolved]);

  const onCardPress = useCallback((title, id) => {
    dispatch(pressCard(title, id));
  }, []);

  const onFlipOpened = useCallback(() => {
    setTimeout(() => {
      if (secondSelected) dispatch(flipOpened());
    }, 1000);
  }, [secondSelected]);

  const renderCards = useMemo(
    () => [
      numbers.map((title, id) => {
        const isOpened =
          (firstSelected && firstSelected.id === id) ||
          (secondSelected && secondSelected.id === id) ||
          resolved.includes(id);

        return (
          <Card
            key={id}
            {...{ title, id, isOpened, onCardPress, onFlipOpened }}
          />
        );
      }),
    ],
    [numbers, resolved, firstSelected, secondSelected]
  );

  const onRestart = useCallback(() => dispatch(restart()), []);

  return (
    <GameView>
      <RowView>
        <CurvedButton title="Restart" onPress={onRestart} left />
        <CurvedBadge {...{ steps }} />
      </RowView>
      <CardsView>{renderCards}</CardsView>
      <CongratsModal {...{ steps }} visible={win} onPress={onRestart} />
    </GameView>
  );
};

export default memo(Game);
