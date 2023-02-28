import cc from "classcat";
import Image, { StaticImageData } from "next/image";
import PlusIcon from "../icon/plusIcon";
import { ItemCardProps } from "./ItemCard";


type ItemCardInputProps = ItemCardProps;

export const ItemCardInput = ({ item }: ItemCardInputProps) => {
  return (
    <div className='card w-32 h-40'>
      <div className="h-4/5 w-auto flex justify-center relative object-contain overflow-hidden ">
        <input id="imgInput" type="file" onChange={() => { }} className="hidden" />
        {!item.imgSrc
          ? <label htmlFor="imgInput"
            className="text-center cursor-pointer self-center p-16 border-2 border-solid border-brownLight rounded 
          hover:border-brownDark"
          >
            <PlusIcon />
          </label>
          : <label htmlFor="imgInput" className='cursor-pointer'>
            <Image src={item.imgSrc} alt='Card image' fill className='object-cover hover:brightness-50'/>
          </label>
        }
      </div>
      <div className="flex self-center m-2">
        <input
          className="w-full p-1 border-2 border-solid border-brownLight rounded 
        hover:border-brownDark focus:border-red"
          onChange={() => { }}
          value={item.name}
          placeholder='Введите название карты'
        />
      </div>

    </div>
  )
}