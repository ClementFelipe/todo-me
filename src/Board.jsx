import React from 'react';
import styled from 'styled-components';
import CardList from './CardList';

export default class Board extends React.Component {
  render() {
    const { name, cardLists } = this.props;

    const comps = cardLists.map((cl) => <CardList list={cl} />);

    const Div = styled.div`
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
    `;

    const Button = styled.button`
        width: 70px;
    `;

    return (
      <div>
        <h1>{name}</h1>
        <Div>
          {comps}
          <Button type="button">+</Button>
        </Div>
      </div>
    );
  }
}
