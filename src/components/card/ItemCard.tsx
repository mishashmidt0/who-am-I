import Image from "next/image";
import { CardType } from "src/types/decks";

export interface ItemCardProps {
  item: CardType,
}

export const ItemCard = ({ item }: ItemCardProps) => {
  return (
    <div className='card w-32 h-40'>
      <div className="h-4/5 w-auto relative object-contain overflow-hidden">
        <Image src={item.imgSrc} alt="deck-img" fill className="object-cover shrink-0" />
      </div>
      <div className="self-center m-2">{item.name}</div>
    </div>
  )
}