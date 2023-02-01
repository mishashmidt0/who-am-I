import { Button } from "src/components/button/button";
import { BUTTON_ARR } from "src/constants/main";


export default function Page() {

  return (
    <div className="w-screen h-screen flex justify-center items-center m-0 pt-12 bg-mainPageBg" >
      <div className="flex justify-between gap-10 text-white  m576:text-xl">
        {BUTTON_ARR.map(el => <Button key={el.id} title={el.title}
          className="py-4 px-7 bg-red hover:bg-green font-medium" />)}
      </div>
    </div>
  );
}
