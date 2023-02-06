import { DeckType } from "src/types/decks";
import { createEvent, createStore } from 'effector';

export const chooseDeck = createEvent<DeckType>();

// @ts-ignore
export const $gameDeck = createStore<DeckType | null>(null).on(chooseDeck, (_, cardId => cardId)) 
