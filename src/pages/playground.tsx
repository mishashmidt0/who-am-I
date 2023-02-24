import { useStore } from "effector-react";
import { useState } from "react";
import { ItemCard } from "src/components/card/ItemCard";
import { $gameDeck } from "src/store/gameDeck";
import { CardType } from "src/types/decks";

export default function Playground() {
  let playerGameDeck = useStore($gameDeck);

  const [playerCard, setPlayerCard] = useState<CardType>(playerGameDeck.cardsArr[0]);

  return (
    <div className='wrapper'>
      <div className='flex gap-3 justify-center flex-wrap'>
        {playerGameDeck != null ? playerGameDeck.cardsArr.map(el =>
          <div onClick={() => setPlayerCard(el)} key={el.id}>
            <ItemCard item={el}/>
          </div>)
          : null}
      </div>
      <div>
        <ItemCard item={playerCard}/>
      </div>
    </div>
  )
}
