import { useUnit } from "effector-react";
import { Button } from "src/components/button/button";
import { DeckCardInput } from "src/components/card/DeckCardInput";
import { ItemCardInput } from "src/components/card/ItemCardInput";
import { $gameDeck } from "src/store/gameDeck";

export default function DecPage() {
  let editDeck = useUnit($gameDeck);

  return (
    <div className='wrapper'>
      <div className='flex gap-3 justify-center flex-wrap'>
        <DeckCardInput 
        item={editDeck} 
        key={editDeck.id} 
        />
        {editDeck.cardsArr.map(el => <ItemCardInput 
        item={el} 
        key={el.id}
        />)}
      </div>
      <Button title='Сохранить' className='bg-red' />
    </div>
  )
}