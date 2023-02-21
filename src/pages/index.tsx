import { useRouter } from "next/router";
import { Button } from "src/components/button/button";
import { BUTTON_ARR } from 'src/constants/main';
import { useModals } from 'src/hooks/use-modals';
import { StartModalDynamic } from 'src/modals/start-modal/start-modal.dynamic';


export default function Page() {
  const router = useRouter();

  const {showModal} = useModals();
  const openStartModal = ()=>{
    showModal('start');
  };

  const redirectToDecksSettings = () => {
    router.push('/decksSettings');
  }

  const redirectToCreateDeck = () => {
    router.push('/createDeck');
  }

  const setOnClickHandler = (id: number) => {
    switch (id) {
      case 0:
        return openStartModal;
      case 1: 
        return redirectToDecksSettings;
      case 2:
        return redirectToCreateDeck;
    }
  }

  return (
    <div className='wrapper' >
      <div className="flex flex-col justify-between gap-10 text-white  m576:text-xl">
        {BUTTON_ARR.map(el => <Button key={el.id} 
        onClick={setOnClickHandler(el.id)} 
        title={el.title}
        className=" bg-red hover:bg-green font-medium" />)}
      </div> 
      <StartModalDynamic />
    </div>
  );
}
