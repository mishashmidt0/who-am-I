import { CardDecksArrType } from "src/types/deks";

export const CARD_DECKS_ARR: CardDecksArrType = [
  {id: 0, name: 'Животные', imgSrc: '/image/img/animals/animalsDeck.jpeg', cardsArr:
    [
      {id: 0, name: 'Жираф', imgSrc: './image/img/animals/giraffe.jpeg', isActive: true},
      {id: 1, name: 'Панда', imgSrc: './image/img/animals/panda.jpeg', isActive: true},
      {id: 2, name: 'Ёжик', imgSrc: './image/img/animals/hedgehog.jpeg', isActive: true},
      {id: 3, name: 'Енот', imgSrc: './image/img/animals/racoon.jpeg', isActive: true},
      {id: 4, name: 'Капибара', imgSrc: './image/img/animals/capybara.jpeg', isActive: true},
    ]},
  {id: 1, name: 'Герои мультфильмов', imgSrc: '/image/img/cartoons/cartoonsDeck.jpg', cardsArr:
    [
      {id: 0, name: 'Чебурашка', imgSrc: './image/img/cartoons/cheburashka.jpeg', isActive: true},
      {id: 1, name: 'Джерри', imgSrc: './image/img/cartoons/jerry.jpeg', isActive: true},
      {id: 2, name: 'Карлсон', imgSrc: './image/img/cartoons/karlson.jpeg', isActive: true},
      {id: 3, name: 'Винни Пух', imgSrc: './image/img/cartoons/vinnieThePooh.jpeg', isActive: true},
      {id: 4, name: 'Ститч', imgSrc: './image/img/cartoons/stitch.jpeg', isActive: true},
    ]},
  {id: 2, name: 'Профессии', imgSrc: '/image/img/professions/professionsDeck.png', cardsArr:
    [
      {id: 0, name: 'Почтальон', imgSrc: './image/img/professions/postman.jpeg', isActive: true},
      {id: 1, name: 'Художник}', imgSrc: './image/img/professions/artist.jpeg', isActive: true},
      {id: 2, name: 'Доктор', imgSrc: './image/img/professions/doctor.jpeg', isActive: true},
      {id: 3, name: 'Пожарный', imgSrc: './image/img/professions/firefighter.jpeg', isActive: true},
      {id: 4, name: 'Шпион', imgSrc: './image/img/professions/spy.jpeg', isActive: true},
    ]},
  
];