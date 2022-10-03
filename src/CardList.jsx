import React from 'react';
import Card from './Card';

export default class CardList extends React.Component {
  render() {
    const { list: { name, items } } = this.props;

    const comps = items.map((c) => <Card title={c.title} description={c.description} />);

    const style = {
      border: '20px',
    };

    return (
      <div>
        <h2>{name}</h2>
        <ul>
          {comps}
        </ul>
      </div>
    );
  }
}
