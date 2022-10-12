import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';
import CardDetail from './CardDetail';

const TitleCardDiv = styled.div`
  background: papayawhip;
  :hover {
    border: 1px solid black
  }
`;

const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 0;
`;

export default function TitleCard(props) {
  const {
    id, title, description, cardListId,
  } = props;

  const [isDetailOpen, setDetailOpen] = useState(false);

  const toggleDetailOpen = () => setDetailOpen(!isDetailOpen);

  return (
    <TitleCardDiv>
      <Title onClick={toggleDetailOpen}>{title}</Title>
      <CardDetail
        id={id}
        title={title}
        description={description}
        cardListId={cardListId}
        isOpen={isDetailOpen}
        openToggle={toggleDetailOpen}
      />
    </TitleCardDiv>
  );
}

TitleCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  cardListId: PropTypes.string.isRequired,
};

TitleCard.defaultProps = {
  title: '<task name>',
  description: '',
};
