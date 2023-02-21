import { DeckType } from "src/types/decks";
import { createEvent, createStore } from 'effector';

export const chooseDeck = createEvent<DeckType>('deck have been chosen');

export const $gameDeck = createStore<DeckType | null>(null).on(chooseDeck, (_, deck) => deck);

chooseDeck.watch(() => console.log($gameDeck.getState()));