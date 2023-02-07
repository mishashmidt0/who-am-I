import Image from "next/image"
import { DeckType, CardType } from "src/types/decks"
import cc from "classcat";



interface CardProps {
  item: DeckType | CardType,
  onClick?: any,
  cardClassName?: String,
}

export const Card = ({ item, onClick, cardClassName }: CardProps) => {
  return (
    <div onClick={() => onClick(item)} className={cc(
      ['flex flex-col justify-between grow-0  bg-white rounded-lg overflow-hidden shadow-2xl', cardClassName])}>
      <div className="h-4/5 w-auto relative object-contain overflow-hidden">
        <Image src={item.imgSrc} alt="deck-img" objectFit='cover' layout='fill' className=" shrink-0" />
      </div>
      <div className="self-center m-2">{item.name}</div>
    </div>
  )
}