import { useEvent } from "effector-react";
import { useRouter } from "next/router";
import { DeckCard } from "src/components/card/DeckCard";
import { CARD_DECKS_ARR } from "src/constants/decks";
import { chooseDeck } from 'src/store/gameDeck';
import { DeckType } from "src/types/decks";

export default function DecksSettings() {
  const router = useRouter();

  const chooseDeckEvent = useEvent(chooseDeck);

  function onClickHandler(el: DeckType, id: number) {
    chooseDeckEvent(el);
    router.push(`/decksSettings/${id}`);
  }

  const decks = CARD_DECKS_ARR.map(el => <div onClick={() => onClickHandler(el, el.id)} key={el.id}>
    <DeckCard
      item={el}
    />
  </div>
  );

  return (
    <div className='wrapper'>
      <div className='w-5/6 h-fit flex items-start gap-5 flex-wrap m-10 p-10 rounded-lg bg-white'>
        {decks}
      </div>
    </div>
  )
}