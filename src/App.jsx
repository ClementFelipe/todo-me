import React from 'react';
import Board from './Board';

export default class App extends React.Component {
  render() {
    const board = {
      name: 'Jira',
      cardLists: [{
        name: 'Backlog',
        items: [
          {
            title: 'Thing1',
            description: 'Desc 1',
          },
          {
            title: 'Thing2',
            description: 'Desc 2',
          },
          {
            title: 'Thing3',
            description: 'Desc 3',
          },
        ],
      }, {
        name: 'In progress',
        items: [
          {
            title: 'Thing4',
            description: 'Desc 4',
          },
          {
            title: 'Thing5',
            description: 'Desc5',
          },
        ],
      }, {
        name: 'Done',
        items: [
          {
            title: 'Thing6',
            description: 'Desc 6',
          },
          {
            title: 'Thing7',
            description: 'Desc 7',
          },
          {
            title: 'Thing8',
            description: 'Desc 8',
          },
          {
            title: 'Thing9',
            description: 'Desc 9',
          },
        ],
      }],
    };

    return <Board name={board.name} cardLists={board.cardLists} />;
  }
}
