import loading from './loading';
import {
  LOG_IN_REQUEST,
  SING_UP_REQUEST,
  LOADING_OFF,
  LOADING_ON,
  LOG_IN_FAILURE,
  TEAM_ADD_REQUEST,
} from '../constants';

describe('loading reducer', () => {
  const initialState = {
    isLoading: false,
  };

  it('should handle initial state', () => {
    expect(loading(undefined, {})).toEqual(initialState);
  });

  it('should handle LOG_IN_SUCCESS', () => {
    expect(loading(initialState, { type: LOG_IN_REQUEST })).toEqual({
      isLoading: true,
    });
  });

  it('should handle SING_UP_REQUEST', () => {
    expect(loading(initialState, { type: SING_UP_REQUEST })).toEqual({
      isLoading: true,
    });
  });

  it('should handle LOADING_OFF', () => {
    expect(loading(initialState, { type: LOADING_OFF })).toEqual({
      isLoading: false,
    });
  });

  it('should handle LOG_IN_FAILURE', () => {
    expect(loading(initialState, { type: LOG_IN_FAILURE })).toEqual({
      isLoading: false,
    });
  });

  it('should handle LOADING_ON', () => {
    expect(loading(initialState, { type: LOADING_ON })).toEqual({
      isLoading: true,
    });
  });

  it('should handle TEAM_ADD_REQUEST', () => {
    expect(loading(initialState, { type: TEAM_ADD_REQUEST })).toEqual({
      isLoading: true,
    });
  });
});
