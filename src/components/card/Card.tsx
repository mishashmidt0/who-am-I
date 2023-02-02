import Image from "next/image"
import { DeckType } from "src/types/deks"



interface CardProps {
  item: DeckType,
}

export const Card = ({item}: CardProps) => {
  return (
    <div className="w-60 h-80 flex flex-col justify-between grow-0  bg-white rounded-lg overflow-hidden shadow-2xl">
      <div className="h-4/6 w-auto relative object-contain overflow-hidden">
        <Image src={item.imgSrc} alt="deck-img" objectFit='cover' layout='fill' className=" shrink-0"/>
      </div>
      <div className="self-center m-5">{item.name}</div>
    </div>
  )
}