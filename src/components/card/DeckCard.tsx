import Image from "next/image";
import { DeckType } from "src/types/decks";

export interface DeckCardProps {
  item: DeckType,
}

export const DeckCard = ({ item }: DeckCardProps) => {
  return (
    <div className='card w-52 h-64'>
      <div className="h-4/5 w-auto relative object-contain overflow-hidden">
        <Image src={item.imgSrc} alt="deck-img" fill className="object-cover shrink-0" />
      </div>
      <div className="self-center m-2">{item.name}</div>
    </div>
  )
}