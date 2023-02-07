import { Button } from "src/components/button/button";
import { BUTTON_ARR } from 'src/constants/main';
import { useModals } from 'src/hooks/use-modals';
import { StartModalDynamic } from 'src/modals/start-modal/start-modal.dynamic';


export default function Page() {
  const {showModal} = useModals();
  const openStartModal = ()=>{
    showModal('start');
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center m-0 pt-12 bg-mainPageBg" >
      <div className="flex justify-between gap-10 text-white  m576:text-xl">
        {BUTTON_ARR.map(el => <Button key={el.id} 
        onClick={(el.id === 0) ? openStartModal : undefined} 
        title={el.title}
        className=" bg-red hover:bg-green font-medium" />)}
      </div> 
      <StartModalDynamic />
    </div>
  );
}
