import finances from './finances';
import { FETCH_FINANCE, DELETE_FINANCE, LOG_OUT } from '../constants';

describe('loading reducer', () => {
  const initialState = {
    byId: {},
    allIds: [],
  };

  const testFinances = [
    { yearAndMonth: '2010-03', _id: '1' },
    { yearAndMonth: '2010-05', _id: '2' },
  ];

  const exampleFinances = {
    byId: {
      '1': { yearAndMonth: '2010-03', _id: '1' },
      '2': { yearAndMonth: '2010-05', _id: '2' },
    },
    allIds: ['2', '1'],
  };

  it('should handle initial state', () => {
    expect(finances(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCH_FINANCE', () => {
    expect(
      finances(undefined, { type: FETCH_FINANCE, finances: testFinances })
    ).toEqual(exampleFinances);
  });

  it('should handle DELETE_FINANCE', () => {
    expect(
      finances(exampleFinances, { type: DELETE_FINANCE, id: '2' })
    ).toEqual({
      byId: {
        '1': { yearAndMonth: '2010-03', _id: '1' },
        '2': { yearAndMonth: '2010-05', _id: '2' },
      },
      allIds: ['1'],
    });
  });

  it('should handle LOG_OUT', () => {
    expect(finances(exampleFinances, { type: LOG_OUT })).toEqual({
      ...initialState,
    });
  });
});
