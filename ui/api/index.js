import axios from 'axios';

export async function getBoard() {
  const { data } = await axios.get('http://localhost:3000/board');

  return data;
}

export function addList() {
  return axios.post('http://localhost:3000/addList');
}

export function addCard(cardListId) {
  return axios.post('http://localhost:3000/addCard', { cardListId }, { headers: { 'Content-Type': 'application/json' } });
}

export function updateCard(cardListId, cardId, cardTitle, cardDescription) {
  return axios.post('http://localhost:3000/updateCard', {
    cardListId, cardId, cardTitle, cardDescription,
  }, { headers: { 'Content-Type': 'application/json' } });
}

export function deleteCard(cardListId, cardId) {
  return axios.post('http://localhost:3000/deleteCard', { cardListId, cardId }, { headers: { 'Content-Type': 'application/json' } });
}

export function deleteCardList(cardListId) {
  return axios.post('http://localhost:3000/deleteCardList', { cardListId }, { headers: { 'Content-Type': 'application/json' } });
}
