import React, { useState } from 'react';
import styled from 'styled-components';
import BoardContext from './BoardContext';
import CardList from '../Card/CardList';
import randomId from '../utils';

const Div = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Button = styled.button`
  width: 70px;
`;

export default function Board() {
  const [name, setName] = useState('Board');
  const [cardLists, setCardLists] = useState([]);

  const addList = () => setCardLists([
    ...cardLists,
    {
      id: randomId(),
      name: 'List',
      items: [],
    },
  ]);

  const addCard = (cardListId) => {
    const cardList = cardLists.find((cl) => cl.id === cardListId);

    cardList.items.push({ id: randomId(), name: 'Task' });

    setCardLists([...cardLists]);
  };

  const updateCard = (cardListId, cardId, cardTitle, cardDescription) => {
    const cardList = cardLists.find((cl) => cl.id === cardListId);
    const card = cardList.items.find((c) => c.id === cardId);

    card.title = cardTitle;
    card.description = cardDescription;

    setCardLists([...cardLists]);
  };

  const deleteCard = (cardListId, cardId) => {
    const cardList = cardLists.find((cl) => cl.id === cardListId);

    cardList.items = cardList.items.filter((c) => c.id !== cardId);

    setCardLists([...cardLists]);
  };

  const deleteCardList = (cardListId) => {
    setCardLists(cardLists.filter((cl) => cl.id !== cardListId));
  };

  return (
    <BoardContext.Provider value={{
      addCard,
      updateCard,
      deleteCard,
      deleteCardList,
    }}
    >
      <div>
        <h1>{name}</h1>
        <Div>
          {cardLists.map((cl) => <CardList id={cl.id} name={cl.name} items={cl.items} />)}
          <Button type="button" onClick={addList}>+</Button>
        </Div>
      </div>
    </BoardContext.Provider>
  );
}
