import React from 'react';
import styled from 'styled-components';
import Card from './Card';

export default class CardList extends React.Component {
  render() {
    const { list: { name, items } } = this.props;

    const comps = items.map((c) => <Card title={c.title} description={c.description} />);

    const Div = styled.div`
      background-color: aliceblue;
      padding: 0px 20px 0px 20px;
    `;

    const Button = styled.button`
      width: 100%;
      height: 30px;
    `;

    return (
      <Div>
        <h1>{name}</h1>
        {comps}
        <Button>+</Button>
      </Div>
    );
  }
}
