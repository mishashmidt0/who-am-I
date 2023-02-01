type CardType = {
  id: number,
  name: string,
  imgSrc: string,
  isActive: boolean, 
};

type DeckType = {
  id: number,
  name: string,
  imgSrc: string,
  cardsArr: Array<CardType>
};

export type CardDecksArrType = Array<DeckType>;