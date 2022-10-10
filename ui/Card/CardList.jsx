import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import TitleCard from './TitleCard';
import BoardContext from '../Board/BoardContext';

const CardListDiv = styled.div`
  background-color: aliceblue;
  padding: 0px 20px 0px 20px;
`;

const CardListHeader = styled.div`
  display: flex;
`;

const Button = styled.button`
  width: 100%;
  height: 30px;
`;

export default class CardList extends React.Component {
  render() {
    const { id, name, items } = this.props;

    return (
      <BoardContext.Consumer>
        {({ addCard, deleteCardList }) => (
          <CardListDiv>
            <CardListHeader>
              <h1>{name}</h1>
              <Button type="button" onClick={(e) => addCard(id, e)}>+</Button>
              <Button type="button" onClick={(e) => deleteCardList(id, e)}>-</Button>
            </CardListHeader>
            {items.map((c) => (
              <TitleCard
                id={c.id}
                title={c.title}
                description={c.description}
                cardListId={id}
              />
            ))}
          </CardListDiv>
        )}
      </BoardContext.Consumer>
    );
  }
}

CardList.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape(TitleCard.propTypes)),
};

CardList.defaultProps = {
  name: 'List',
  items: [],
};
