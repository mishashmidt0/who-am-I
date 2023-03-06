import { combine, createEvent, createStore } from "effector";

export const addDeckImg = createEvent<string>('Deck img have been added');
export const addDeckName = createEvent<string>('Deck name have been added');

export const $newDeckImg = createStore<string>('').on(addDeckImg, (_, image) => image);
export const $newDeckName = createStore<string>('').on(addDeckName, (_, name) => name);

addDeckImg.watch(() => console.log( $newDeckImg.getState()))
addDeckName.watch(() => console.log( $newDeckName.getState()))

export const $newDeck = combine(
  {$newDeckImg, $newDeckName},
  ({$newDeckImg, $newDeckName}) => {
    return {id: 0,
    name: $newDeckName,
    imgSrc: $newDeckImg,
    cardsArr: [],
    }
  }
)
