import { CardInput } from "src/components/card/CardInput";

export default function CreateDeck() {

  const emptyDeck = {
    id: 27,
    name: '',
    imgSrc: '',
    cardsArr: [],
  }

  return (
    <div className='wrapper'>
      <div className='p-4 rounded bg-white mb-8'>Выберите картинку и введите название для обложки новой колоды</div>
      <CardInput item={emptyDeck} placeholder={'Ведите название колоды'} cardClassName='w-60 h-80'/>
    </div>
  )
}