import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Card from './Card';

const Div = styled.div`
  background-color: aliceblue;
  padding: 0px 20px 0px 20px;
`;

const Button = styled.button`
  width: 100%;
  height: 30px;
`;

export default class CardList extends React.Component {
  render() {
    const { name, items } = this.props;

    return (
      <Div>
        <h1>{name}</h1>
        {items.map((c) => <Card title={c.title} description={c.description} />)}
        <Button>+</Button>
      </Div>
    );
  }
}

CardList.propTypes = {
  name: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape(Card.propTypes)),
};

CardList.defaultProps = {
  name: 'List',
  items: [],
};
