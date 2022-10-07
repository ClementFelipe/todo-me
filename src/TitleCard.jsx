import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import CardDetail from './CardDetail';

const CardDiv = styled.div`
  background: papayawhip;
  :hover {
    border: 1px solid black
  }
`;

const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 0;
`;

export default class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDetailOpen: false,
    };
  }

  toggleDetailOpen = () => this.setState((state) => ({
    isDetailOpen: !state.isDetailOpen,
  }));

  render() {
    const {
      id, title, description, cardListId,
    } = this.props;
    const { isDetailOpen } = this.state;

    return (
      <CardDiv>
        <Title onClick={this.toggleDetailOpen}>{title}</Title>
        <CardDetail
          id={id}
          title={title}
          description={description}
          cardListId={cardListId}
          isOpen={isDetailOpen}
          openToggle={this.toggleDetailOpen}
        />
      </CardDiv>
    );
  }
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  cardListId: PropTypes.string.isRequired,
};

Card.defaultProps = {
  title: '<task name>',
  description: '',
};
