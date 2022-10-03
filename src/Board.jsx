import React from 'react';
import CardList from './CardList';

export default class Board extends React.Component {
  render() {
    const { name, cardLists } = this.props;

    const comps = cardLists.map((cl) => <CardList list={cl} />);

    const style = {
      display: 'flex',
      'justify-content': 'space-between',
    };

    return (
      <div>
        <h1>{name}</h1>
        <div style={style}>
          {comps}
        </div>
      </div>
    );
  }
}
