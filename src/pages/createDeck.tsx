import { DeckCardInput } from "src/components/card/DeckCardInput";
import { EMPTY_DECK } from "src/constants/decks";

export default function CreateDeck() {
  return (
    <div className='wrapper'>
      <div className='p-4 rounded bg-white mb-8'>Выберите картинку и введите название для обложки новой колоды</div>
      <DeckCardInput item={EMPTY_DECK}/>
    </div>
  )
}