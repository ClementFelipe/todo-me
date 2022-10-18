import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import BoardContext from './BoardContext';
import CardList from '../Card/CardList';
import * as api from '../api';

const Div = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Button = styled.button`
  width: 70px;
`;

export default function Board() {
  const [board, setBoard] = useState({ name: 'Board', cardLists: [] });
  const [command, setCommand] = useState(null);

  useEffect(() => {
    async function eff() {
      if (command) {
        await command();

        // TODO: Fix, causes double call to get board
        setCommand(null);
      }

      setBoard(await api.getBoard());
    }

    eff();
  }, [command]);

  const addList = () => setCommand(() => api.addList);
  const addCard = (cardListId) => setCommand(() => () => api.addCard(cardListId));
  const updateCard = (cardListId, cardId, cardTitle, cardDescription) => setCommand(() => () => api.updateCard(cardListId, cardId, cardTitle, cardDescription));
  const deleteCard = (cardListId, cardId) => setCommand(() => () => api.deleteCard(cardListId, cardId));
  const deleteCardList = (cardListId) => setCommand(() => () => api.deleteCardList(cardListId));

  const funcs = useMemo(() => ({
    addCard,
    updateCard,
    deleteCard,
    deleteCardList,
  }), []);

  return (
    <BoardContext.Provider value={funcs}>
      <div>
        <h1>{board.name}</h1>
        <Div>
          {board.cardLists.map((cl) => <CardList id={cl.id} name={cl.name} items={cl.items} />)}
          <Button type="button" onClick={addList}>+</Button>
        </Div>
      </div>
    </BoardContext.Provider>
  );
}
