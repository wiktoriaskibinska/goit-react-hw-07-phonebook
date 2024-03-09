import axios from 'axios';
import {
  fetchingError,
  fetchingInProgress,
  fetchingSuccess,
} from './contactsSlice';

axios.defaults.baseURL = `https://65ea1b39c9bf92ae3d3b1792.mockapi.io/`;

export const fetchContacts = () => async dispatch => {
  try {
    dispatch(fetchingInProgress());
    const response = await axios.get('contacts');
    dispatch(fetchingSuccess(response.data));
  } catch (error) {
    dispatch(fetchingError(error.message));
  }
};
