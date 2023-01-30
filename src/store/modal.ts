import { createApi, createStore } from 'effector';

export type ModalNames = |'start' |null;

export const $modal = createStore<ModalNames>(null);

export const $modalApi = createApi($modal, {
  hide: () => null,
  show: (_, name: ModalNames) => name,
});
