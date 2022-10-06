import React from 'react';

export default React.createContext({
  name: '',
  cardLists: [],
  addList: () => {},
  addCard: () => {},
});
