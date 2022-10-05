import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  background: papayawhip;
`;

export default class Card extends React.Component {
  render() {
    const { title, description } = this.props;

    return (
      <Div>
        <h1>{title}</h1>
        <h2>{description}</h2>
      </Div>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

Card.defaultProps = {
  title: 'Title',
  description: '',
};
