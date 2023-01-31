import { BUTTON_ARR } from 'src/constants/main';
import { useModals } from 'src/hooks/use-modals';
import { StartModalDynamic } from 'src/modals/start-modal/start-modal.dynamic';

export default function Page() {
  const {showModal} = useModals();
  const openStartModal = ()=>{
    showModal('start');
  };

  return (
    <div className="m-0 flex h-screen w-screen items-center justify-center bg-brown_light bg-[url('../../public/image/img/bgMain.png')]
    pt-12" >
      <div className="flex justify-between gap-10 text-white  m576:text-xl">
        {BUTTON_ARR.map(button => <button key={button.id}
          className="rounded-full bg-red py-4 px-7 font-medium hover:bg-green hover:shadow-xl">
          {button.title}
        </button>)}
      </div>
      <StartModalDynamic/>
    </div>
  );
}
