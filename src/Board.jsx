import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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
  render() {
    const { name, cardLists } = this.props;

    return (
      <div>
        <h1>{name}</h1>
        <Div>
          {cardLists.map((cl) => <CardList name={cl.name} items={cl.items} />)}
          <Button type="button">+</Button>
        </Div>
      </div>
    );
  }
}

Board.propTypes = {
  name: PropTypes.string,
  cardLists: PropTypes.arrayOf(CardList.propTypes),
};

Board.defaultProps = {
  name: 'Board',
  cardLists: [],
};
