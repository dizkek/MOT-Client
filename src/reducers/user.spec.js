import user from './user';
import {
  FETCH_USER_DATA,
  ADD_TEAM,
  LOG_OUT,
  LOG_IN_SUCCESS,
} from '../constants';

describe('loading reducer', () => {
  const initialState = {
    name: null,
    email: null,
    teams: {},
    password: null,
    isLoggedIn: false,
  };

  const testInitalState = {
    name: null,
    email: null,
    teams: {
      byId: {},
      allIds: [],
    },
    password: null,
    isLoggedIn: false,
  };

  const testTeam = {
    teams: [
      { name: '시리우스론', _id: '1' },
      { name: '말포이', _id: '2' },
    ],
  };

  const testTeams = {
    byId: {
      '1': { name: '시리우스론', _id: '1' },
      '2': { name: '말포이', _id: '2' },
    },
    allIds: ['1', '2'],
  };

  const testUser = {
    name: null,
    email: null,
    teams: testTeams,
    password: null,
    isLoggedIn: false,
  };

  const newTeam = { name: '루나', _id: '3' };

  it('should handle initial state', () => {
    expect(user(undefined, {})).toEqual(initialState);
  });

  it('should handle ADD_TEAM', () => {
    expect(
      user(initialState, { type: FETCH_USER_DATA, user: testTeam })
    ).toEqual(testUser);
  });

  it('should handle ADD_TEAM', () => {
    expect(user(testInitalState, { type: ADD_TEAM, team: newTeam })).toEqual({
      name: null,
      email: null,
      teams: {
        byId: {
          '3': { name: '루나', _id: '3' },
        },
        allIds: ['3'],
      },
      password: null,
      isLoggedIn: false,
    });
  });

  it('should handle LOG_OUT', () => {
    expect(user(initialState, { type: LOG_OUT })).toEqual(initialState);
  });

  it('should handle LOG_IN_SUCCESS', () => {
    expect(user(initialState, { type: LOG_IN_SUCCESS })).toEqual({
      name: null,
      email: null,
      teams: {},
      password: null,
      isLoggedIn: true,
    });
  });
});
