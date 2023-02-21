import { useStore } from "effector-react";
import { Button } from "src/components/button/button";
import { Card } from "src/components/card/Card";
import { CardInput } from "src/components/card/CardInput";
import { CARD_DECKS_ARR } from "src/constants/decks";
import { $gameDeck } from "src/store/gameDeck";

export default function DecPage() {
  let editDeck = useStore($gameDeck);

  const emptyDeck = {
    id: 27,
    name: 'имя',
    imgSrc: '',
    cardsArr: [],
  }

  if (editDeck === null) {
    editDeck = emptyDeck;
  }


  return (
    <div className='wrapper'>
      <div className='flex gap-3 justify-center flex-wrap'>
        <CardInput 
        item={editDeck} 
        cardClassName={'w-32 h-40'} 
        key={editDeck.id} 
        placeholder='Введите название колоды'/>
        {editDeck.cardsArr.map(el => <CardInput 
        item={el} 
        cardClassName={'w-32 h-40'} 
        key={el.id} 
        placeholder='Введите название карточки'/>)}
      </div>
      <Button title='Сохранить' className='bg-red' />
    </div>
  )
}