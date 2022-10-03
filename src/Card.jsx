import React from 'react';

export default class Card extends React.Component {
  render() {
    const { title, description } = this.props;

    return (
      <div>
        <li>
          <h3>{title}</h3>
          <h4>{description}</h4>
        </li>
      </div>
    );
  }
}
