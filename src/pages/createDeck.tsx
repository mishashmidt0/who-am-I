import { useStore } from "effector-react";
import { Button } from "src/components/button/button";
import { DeckCardInput } from "src/components/card/DeckCardInput";
import { EMPTY_DECK } from "src/constants/decks";
import { $newDeck } from "src/store/newDeck";

export default function CreateDeck() {
  const newUserDeck = useStore($newDeck);

  return (
    <div className='wrapper !gap-8'>
      <div className='p-4 rounded bg-white'>Выберите картинку и введите название для обложки новой колоды</div>
      <DeckCardInput item={EMPTY_DECK}/>
      <Button title='Сохранить' className='bg-red' onClick={() => console.log(newUserDeck)}/>
    </div>
  )
}