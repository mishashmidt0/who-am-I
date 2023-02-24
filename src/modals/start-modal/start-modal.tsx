import { useEvent } from 'effector-react';
import Link from 'next/link';
import { Button } from 'src/components/button/button';
import { DeckCard } from 'src/components/card/DeckCard';
import { CARD_DECKS_ARR } from 'src/constants/decks';
import { ModalLayout } from 'src/layouts/modal-layout/modal-layout';
import { chooseDeck } from 'src/store/gameDeck';

export const StartModal = () => {
  const chooseDeckEvent = useEvent(chooseDeck);

  return (
    <ModalLayout name='start'>
      <div className="flex  items-center flex-col gap-5 m-10 p-10 rounded-lg bg-white">
        <div className="w-full flex justify-center flex-wrap gap-8">
          {CARD_DECKS_ARR.map(el => <div onClick={() => chooseDeckEvent(el)} key={el.id}>
            <DeckCard item={el} />
            </div>)}
        </div>
        <Link href='/playground'><Button title="Начать игру" className=" bg-red hover:bg-green" /></Link>
      </div>
    </ModalLayout>
  );
};
