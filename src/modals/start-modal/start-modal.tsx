import { Button } from 'src/components/button/button';
import { Card } from 'src/components/card/Card';
import { CARD_DECKS_ARR } from 'src/constants/decks';
import { ModalLayout } from 'src/layouts/modal-layout/modal-layout';
import { chooseDeck } from 'src/store/gameDeck';

export const StartModal = () => {
  return (
    <ModalLayout name='start'>
      <div className="flex items-center flex-col gap-5 m-10 p-10 rounded-lg bg-white">
        <div className="grid grid-cols-3 gap-10
">
          {CARD_DECKS_ARR.map(el => <Card item={el} onClick={chooseDeck}/>)}
        </div>
        <Button title="Начать игру" className="w-1/6 bg-red hover:bg-green" />
      </div>
    </ModalLayout>
  );
};
