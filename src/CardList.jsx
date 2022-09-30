import React from 'react';
import Card from './Card';

export default class CardList extends React.Component {
  render() {
    return (
      <div>
        <h2>List</h2>
        <ul>
          <Card />
          <Card />
          <Card />
        </ul>
      </div>
    );
  }
}
