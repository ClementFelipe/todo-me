import express from 'express';
import {
  addCard, addList, deleteCard, deleteCardList, getBoard, updateCard,
} from './board.js';

function run() {
  const app = express();

  app.get('/board', getBoard);

  app.get('/addList', addList);
  app.post('/deleteCardList', deleteCardList);

  app.post('/addCard', addCard);
  app.post('/updateCard', updateCard);
  app.post('/deleteCard', deleteCard);

  app.listen(3000, () => console.log('Started server on 3000'));
}

run();
