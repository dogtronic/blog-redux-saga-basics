import * as types from './actionTypes';

// LOAD USERS
export const loadUsersStart = pageInfo => ({
  type: types.LOAD_USERS_START,
  payload: pageInfo,
});

export const loadUsersSuccess = users => ({
  type: types.LOAD_USERS_SUCCESS,
  payload: users,
});

export const loadUsersError = error => ({
  type: types.LOAD_USERS_ERROR,
  payload: error,
});


