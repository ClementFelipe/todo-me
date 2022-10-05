import React from 'react';
import styled from 'styled-components';

export default class Card extends React.Component {
  render() {
    const { title, description } = this.props;

    const Div = styled.div`
      background: papayawhip;
    `;

    return (
      <Div>
        <h1>{title}</h1>
        <h2>{description}</h2>
      </Div>
    );
  }
}
