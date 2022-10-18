const fs = require('fs');
const randomId = require('./utils');

const FILE_PATH = `${__dirname}/data.json`;

function validateFile() {
  if (!fs.existsSync(FILE_PATH)) {
    const initialBoard = {
      name: 'Jira',
      cardLists: [],
    };

    fs.writeFileSync(FILE_PATH, JSON.stringify(initialBoard), { encoding: 'utf-8' });
  }
}

function getFileContent() {
  validateFile();

  return JSON.parse(fs.readFileSync(FILE_PATH, { encoding: 'utf-8' }));
}

function writeFileContent(data) {
  validateFile();

  fs.writeFileSync(FILE_PATH, JSON.stringify(data), { encoding: 'utf-8' });
}

function commandHandler(boardFn) {
  return (req, res) => {
    const board = getFileContent();

    boardFn(board, req.body);
    writeFileContent(board);

    res.status(204).send();
  };
}

exports.getBoard = (req, res) => {
  res.json(getFileContent());
};

exports.addList = commandHandler((board) => {
  board.cardLists.push({
    id: randomId(),
    name: 'List',
    items: [],
  });
});

exports.deleteCardList = commandHandler((board, { cardListId }) => {
  board.cardLists = board.cardLists.filter((l) => l.id !== cardListId);
});

exports.addCard = commandHandler((board, { cardListId }) => {
  const cardList = board.cardLists.find((cl) => cl.id === cardListId);

  cardList.items.push({ id: randomId(), title: 'Task' });
});

exports.updateCard = commandHandler((board, {
  cardListId, cardId, cardTitle, cardDescription,
}) => {
  const cardList = board.cardLists.find((cl) => cl.id === cardListId);
  const card = cardList.items.find((c) => c.id === cardId);

  card.title = cardTitle;
  card.description = cardDescription;
});

exports.deleteCard = commandHandler((board, { cardListId, cardId }) => {
  const cardList = board.cardLists.find((cl) => cl.id === cardListId);

  cardList.items = cardList.items.filter((c) => c.id !== cardId);
});
