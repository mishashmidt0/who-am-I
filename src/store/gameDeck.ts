import { DeckType } from "src/types/decks";
import { createEvent, createStore } from 'effector';
import { EMPTY_DECK } from "src/constants/decks";

const initialStore = EMPTY_DECK;

export const chooseDeck = createEvent<DeckType>('deck have been chosen');

export const $gameDeck = createStore<DeckType>(initialStore).on(chooseDeck, (_, deck) => deck);

chooseDeck.watch(() => console.log($gameDeck.getState()));