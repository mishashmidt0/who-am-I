import Image from "next/image"
import { DeckType } from "src/types/decks"



interface CardProps {
  item: DeckType,
  onClick: any,
}

export const Card = ({item, onClick}: CardProps) => {
  return (
    <div onClick={() => onClick(item)} className="w-60 h-80 flex flex-col justify-between grow-0  bg-white rounded-lg overflow-hidden shadow-2xl">
      <div className="h-3/4 w-auto relative object-contain overflow-hidden">
        <Image src={item.imgSrc} alt="deck-img" objectFit='cover' layout='fill' className=" shrink-0"/>
      </div>
      <div className="self-center m-5">{item.name}</div>
    </div>
  )
}