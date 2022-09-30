import React from 'react';
import CardList from './CardList';

export default class Board extends React.Component {
  render() {
    return (
      <div>
        <h1>Board</h1>
        <CardList />
        <CardList />
        <CardList />
      </div>
    );
  }
}
