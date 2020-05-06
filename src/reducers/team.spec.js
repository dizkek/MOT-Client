import team from './team';
import {
  FETCH_TEAM_DATA,
  ADD_NOTICE_REQUEST,
  FETCH_MEMBERS_DATA,
  LOG_OUT,
  SAVE_FORMATION,
  UPDATE_FORMATION,
  FETCH_FORUM_DATA,
  SAVE_MATCH,
} from '../constants';

describe('loading reducer', () => {
  const initialState = {
    name: null,
    members: {},
    formation: [],
    forum: {
      byId: {},
      allIds: [],
    },
    finances: [],
    notices: [],
    admin: null,
    _id: null,
    match: [],
  };

  const testTeam = {
    members: [{ name: '헤르미온느', _id: '1' }],
    forum: [{ content: '해리포터 보러갑시다', _id: '1' }],
  };

  const testNotice = { content: '축구일정 업습니다 당분간' };
  const testMembers = [
    { name: '해리포터', _id: '1' },
    { name: '론', _id: '2' },
  ];

  const formationData = [
    { innerText: '지니', marginLeft: '100px', marginTop: '100px' },
  ];

  const forumData = [{ _id: '1' }, { _id: '2' }];

  const match = {
    date: '2010-05-05',
    time: '12:00',
    opponent: '슬레더린',
    location: '론하우스',
  };

  it('should handle initial state', () => {
    expect(team(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCH_TEAM_DATA', () => {
    expect(team(undefined, { type: FETCH_TEAM_DATA, team: testTeam })).toEqual({
      members: {
        byId: {
          '1': { name: '헤르미온느', _id: '1' },
        },
        allIds: ['1'],
      },
      forum: ['1'],
    });
  });

  it('should handle ADD_NOTICE_REQUEST', () => {
    expect(
      team(undefined, { type: ADD_NOTICE_REQUEST, notice: testNotice })
    ).toEqual({
      ...initialState,
      notices: [{ content: '축구일정 업습니다 당분간' }],
    });
  });

  it('should handle FETCH_MEMBERS_DATA', () => {
    expect(
      team(undefined, { type: FETCH_MEMBERS_DATA, members: testMembers })
    ).toEqual({
      ...initialState,
      members: {
        byId: {
          '1': { name: '해리포터', _id: '1' },
          '2': { name: '론', _id: '2' },
        },
        allIds: ['1', '2'],
      },
    });
  });

  it('should handle LOG_OUT', () => {
    expect(team(undefined, { type: LOG_OUT })).toEqual({
      ...initialState,
    });
  });

  it('should handle SAVE_FORMATION', () => {
    expect(
      team(undefined, { type: SAVE_FORMATION, data: formationData })
    ).toEqual({
      ...initialState,
      formation: formationData,
    });
  });

  it('should handle UPDATE_FORMATION', () => {
    expect(
      team(undefined, { type: UPDATE_FORMATION, formation: formationData })
    ).toEqual({
      ...initialState,
      formation: formationData,
    });
  });

  it('should handle FETCH_FORUM_DATA', () => {
    expect(
      team(undefined, { type: FETCH_FORUM_DATA, forum: forumData })
    ).toEqual({
      ...initialState,
      forum: ['2', '1'],
    });
  });

  it('should handle SAVE_MATCH', () => {
    expect(team(undefined, { type: SAVE_MATCH, match })).toEqual({
      ...initialState,
      match: [match],
    });
  });
});
