import React from 'react';
import PropTypes from 'prop-types';
import BoardContext from '../Board/BoardContext';

export default class CardDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.title,
      description: props.description,
    };
  }

  changeTitle = (e) => this.setState({ title: e.target.value });

  changeDescription = (e) => this.setState({ description: e.target.value });

  render() {
    const {
      id, cardListId, isOpen, openToggle,
    } = this.props;

    const { title, description } = this.state;

    return (
      <BoardContext.Consumer>
        {({ updateCard }) => (
          <dialog open={isOpen}>
            <form>
              <input type="text" value={title} onChange={this.changeTitle} />
              <br />
              <input type="text" value={description} onChange={this.changeDescription} />
            </form>
            <button type="button" onClick={(e) => updateCard(cardListId, id, title, description, e)}>Update</button>
            <button type="button" onClick={openToggle}>Cancel</button>
          </dialog>
        )}
      </BoardContext.Consumer>
    );
  }
}

CardDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  cardListId: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
  openToggle: PropTypes.func.isRequired,
};

CardDetail.defaultProps = {
  description: false,
  isOpen: false,
};
