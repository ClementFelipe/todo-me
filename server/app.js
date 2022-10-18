const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {
  addCard, addList, deleteCard, deleteCardList, getBoard, updateCard,
} = require('./board');

function run() {
  const app = express();

  app.use(cors());
  app.use(bodyParser.json());
  app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
    next();
  });

  app.get('/board', getBoard);

  app.post('/addList', addList);
  app.post('/deleteCardList', deleteCardList);

  app.post('/addCard', addCard);
  app.post('/updateCard', updateCard);
  app.post('/deleteCard', deleteCard);

  app.listen(3000, () => console.log('Started server on 3000'));
}

run();
