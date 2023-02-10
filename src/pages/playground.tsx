import { useStore } from "effector-react";
import { useState } from "react";
import { Card } from "src/components/card/Card";
import { CARD_DECKS_ARR } from "src/constants/decks";
import { $gameDeck } from "src/store/gameDeck";
import { CardType } from "src/types/decks";

export default function Playground() {
  let playerGameDeck = useStore($gameDeck);

  if (playerGameDeck === null) {
    playerGameDeck = CARD_DECKS_ARR[0];
  }

  const [playerCard, setPlayerCard] = useState<CardType>(playerGameDeck.cardsArr[0]);

  const choosePlayerCard = (card: CardType) => {
    setPlayerCard(card);
  }

  return (
    <div className='wrapper'>
      <div className='flex gap-3 justify-center flex-wrap'>
        {playerGameDeck != null ? playerGameDeck.cardsArr.map(el => 
        <Card item={el} cardClassName={'w-32 h-40'} onClick={choosePlayerCard} />) : null}
      </div>
      <div>
        <Card item={playerCard} cardClassName={'w-44 h-52'} />
      </div>
    </div>
  )
}
