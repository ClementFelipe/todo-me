import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BoardContext from '../Board/BoardContext';

export default function CardDetail(props) {
  const {
    id,
    cardListId,
    isOpen,
    openToggle,
    title: initialTitle,
    description: initialDescription,
  } = props;

  const [title, changeTitle] = useState(initialTitle);
  const [description, changeDescription] = useState(initialDescription);

  return (
    <BoardContext.Consumer>
      {({ updateCard, deleteCard }) => (
        <dialog open={isOpen}>
          <form>
            <input type="text" value={title} onChange={(e) => changeTitle(e.target.value)} />
            <br />
            <input type="text" value={description} onChange={(e) => changeDescription(e.target.value)} />
          </form>
          <button type="button" onClick={openToggle}>Cancel</button>
          <button type="button" onClick={(e) => updateCard(cardListId, id, title, description, e)}>Update</button>
          <button type="button" onClick={(e) => deleteCard(cardListId, id, e)}>Delete</button>
        </dialog>
      )}
    </BoardContext.Consumer>
  );
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
