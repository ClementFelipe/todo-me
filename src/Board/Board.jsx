import React from 'react';
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

export default class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Board',
      cardLists: [],
      /* eslint-disable react/no-unused-state */
      addList: this.addList,
      addCard: this.addCard,
      updateCard: this.updateCard,
      deleteCard: this.deleteCard,
      deleteCardList: this.deleteCardList,
      /* eslint-enable react/no-unused-state */
    };
  }

  addList = () => this.setState((state) => ({
    cardLists: [
      ...state.cardLists,
      {
        id: randomId(),
        name: 'List',
        items: [],
      }],
  }));

  addCard = (cardListId) => this.setState((state) => {
    const cardList = state.cardLists.find((cl) => cl.id === cardListId);

    cardList.items.push({ id: randomId(), name: 'Task' });

    this.setState(state);
  });

  updateCard = (cardListId, cardId, cardTitle, cardDescription) => this.setState((state) => {
    const cardList = state.cardLists.find((cl) => cl.id === cardListId);
    const card = cardList.items.find((c) => c.id === cardId);

    card.title = cardTitle;
    card.description = cardDescription;

    this.setState(state);
  });

  deleteCard = (cardListId, cardId) => this.setState((state) => {
    const cardList = state.cardLists.find((cl) => cl.id === cardListId);

    cardList.items = cardList.items.filter((c) => c.id !== cardId);

    this.setState(state);
  });

  deleteCardList = (cardListId) => this.setState((state) => {
    this.setState({
      cardLists: state.cardLists.filter((cl) => cl.id !== cardListId),
    });
  });

  render() {
    const { name, cardLists } = this.state;

    return (
      <BoardContext.Provider value={this.state}>
        <div>
          <h1>{name}</h1>
          <Div>
            {cardLists.map((cl) => <CardList id={cl.id} name={cl.name} items={cl.items} />)}
            <Button type="button" onClick={this.addList}>+</Button>
          </Div>
        </div>
      </BoardContext.Provider>
    );
  }
}
