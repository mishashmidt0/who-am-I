import { useRouter } from "next/router";
import { Card } from "src/components/card/Card";
import PlusIcon from "src/components/icon/plusIcon";
import { CARD_DECKS_ARR } from "src/constants/decks";
import { chooseDeck } from 'src/store/gameDeck';
import { DeckType } from "src/types/decks";

export default function DecksSettings() {
  const router = useRouter();

  function onClickHandler(e: DeckType, id: number,) {
    chooseDeck(e);
    router.push(`/decksSettings/${id}`);
  }

  const decks = CARD_DECKS_ARR.map(item => <Card
    item={item}
    cardClassName={'w-52 h-64'}
    key={item.id}
    onClick={(e: DeckType) => onClickHandler(e, item.id)}
  />
  );

  return (
    <div className='wrapper'>
      <div className='w-5/6 h-5/6 flex items-start gap-5 flex-wrap m-10 p-10 rounded-lg bg-white'>
        {decks}
      </div>
    </div>
  )
}