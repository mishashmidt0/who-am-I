import { useRouter } from 'next/router';
import { Button } from 'src/components/button/button';
import { Card } from 'src/components/card/Card';
import { CARD_DECKS_ARR } from 'src/constants/decks';
import { ModalLayout } from 'src/layouts/modal-layout/modal-layout';
import { chooseDeck } from 'src/store/gameDeck';

export const StartModal = () => {
  const router = useRouter();

  const startGame= () => {
    router.push('/playground');
  }

  return (
    <ModalLayout name='start'>
      <div className="flex items-center flex-col gap-5 m-10 p-10 rounded-lg bg-white">
        <div className="grid grid-cols-3 gap-10
">
          {CARD_DECKS_ARR.map(el => <Card item={el} onClick={chooseDeck} cardClassName={'w-60 h-80'} key={el.id}/>)}
        </div>
        <Button title="Начать игру" onClick={startGame} className="w-1/6 bg-red hover:bg-green" />
      </div>
    </ModalLayout>
  );
};
