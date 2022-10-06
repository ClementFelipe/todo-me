import React from 'react';
import styled from 'styled-components';
import BoardContext from './BoardContext';
import CardList from './CardList';

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
      addList: () => this.setState((state) => ({
        cardLists: [
          ...state.cardLists,
          {
            id: (Math.random() + 1).toString(36).substring(7),
            name: 'List',
            items: [],
          }],
      })),
      addCard: (cardListId) => this.setState((state) => {
        const cardList = state.cardLists.find((cl) => cl.id === cardListId);

        cardList.items.push({ name: 'Task', description: 'Hola' });

        this.setState(state);
      }),
    };
  }

  render() {
    const { name, cardLists, addList } = this.state;

    return (
      <BoardContext.Provider value={this.state}>
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
}
