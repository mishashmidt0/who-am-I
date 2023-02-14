import { Card } from "src/components/card/Card";
import PlusIcon from "src/components/icon/plusIcon";
import { CARD_DECKS_ARR } from "src/constants/decks";

export default function DecksSettings() {
  const decks = CARD_DECKS_ARR.map(item => <Card item={item} cardClassName={'w-52 h-64'} key={item.id}/>);
  

  return (
    <div className='wrapper'>
      <div className='w-5/6 h-5/6 flex items-start gap-5 flex-wrap m-10 p-10 rounded-lg bg-white'>
        <button className='w-52 h-64 card justify-center items-center gap-5'>
          <PlusIcon />
          Создать новую колоду</button>
        {decks}
      </div>
    </div>
  )
}