import cc from "classcat";
import Image, { StaticImageData } from "next/image";
import PlusIcon from "../icon/plusIcon";
import { CardProps } from "./Card";


interface CardInputProps extends CardProps {
  placeholder: string;
}

export const CardInput = ({ item, onClick, cardClassName, placeholder }: CardInputProps) => {
  return (
    <div onClick={() => onClick(item)} className={cc(
      ['card', cardClassName])}>
      <div className="h-4/5 w-auto flex justify-center relative object-contain overflow-hidden ">
        <input id="imgInput" type="file" onChange={() => { }} className="hidden" />
        {item.imgSrc === ''
          ? <label htmlFor="imgInput"
            className="text-center cursor-pointer self-center p-16 border-2 border-solid border-brownLight rounded 
          hover:border-brownDark"
          >
            <PlusIcon />
          </label>
          : <label htmlFor="imgInput" className='cursor-pointer'>
            <Image src={item.imgSrc} alt='Card image' objectFit='cover' layout='fill' className='hover:brightness-50'/>
          </label>
        }
      </div>
      <div className="flex self-center m-2">
        <input
          className="w-full p-1 border-2 border-solid border-brownLight rounded 
        hover:border-brownDark focus:border-red"
          onChange={() => { }}
          value={item.name}
          placeholder={placeholder}
        />
      </div>

    </div>
  )
}