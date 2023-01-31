import { BUTTON_ARR } from "src/constants/main";

export default function Page() {

  return (
    <div className="w-screen h-screen flex justify-center items-center m-0 pt-12 bg-brown_light 
    bg-[url('../../public/image/img/bgMain.png')]" >
      <div className="flex justify-between gap-10 text-white  m576:text-xl">
        {BUTTON_ARR.map(button => <button key={button.id} 
        className="rounded-full py-4 px-7 bg-red hover:bg-green hover:shadow-xl font-medium">
          {button.title}
        </button>)}
      </div> 
    </div>
  );
}
