import api from '../utils/api';
import { setAlert } from './alert';
import {
  GET_TASKS,
  TASK_ERROR,
  DELETE_TASK,
  UPDATE_TASK,
  ADD_TASK,
  GET_TASK,
} from './types';

/*
  NOTE: we don't need a config object for axios as the
 default headers in axios are already Content-Type: application/json
 also axios stringifies and parses JSON for you, so no need for 
 JSON.stringify or JSON.parse
*/

// Get tasks
export const getTasks = () => async (dispatch) => {
  try {
    const res = await api.get('/list/me');
    // const res = await api.get('/list');

    dispatch({
      type: GET_TASKS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: TASK_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};


// Delete task
export const deleteTask = (id) => async (dispatch) => {
  try {
    await api.delete(`/list/${id}`);

    dispatch({
      type: DELETE_TASK,
      payload: id
    });

    dispatch(setAlert('Task Removed', 'success'));
  } catch (err) {
    dispatch({
      type: TASK_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Update task
export const updateTask = (id,formData) => async (dispatch) => {
  try { 
    await api.put(`/list/${id}`, formData);
    dispatch({
      type: UPDATE_TASK,
      payload: formData
    });
    dispatch(setAlert('Task Updated', 'success'));
  } catch (err) {
    dispatch({
      type: TASK_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Add task
export const addTask = (formData) => async (dispatch) => {
  try {
    const res = await api.post('/list', formData);

    dispatch({
      type: ADD_TASK,
      payload: res.data
    });

    dispatch(setAlert('Task Created', 'success'));
  } catch (err) {
    dispatch({
      type: TASK_ERROR,
      // payload: { msg: err.response.statusText, status: err.response.status }
      payload: { msg: err.response, status: err.response.status }

    });
  }
};

// Get task
export const getTask = (id) => async (dispatch) => {
  try {
    const res = await api.get(`/list/${id}`);

    dispatch({
      type: GET_TASK,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: TASK_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

