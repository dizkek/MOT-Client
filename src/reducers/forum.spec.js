import forum from './forum';
import {
  FETCH_TEAM_DATA,
  FETCH_FORUM_DATA,
  ADD_POST,
  UPDATE_LIKES,
  UPDATE_POST,
  DELETE_POST,
  LOG_OUT,
} from '../constants';

describe('loading reducer', () => {
  const initialState = {
    byId: {},
    allIds: [],
  };

  const updateInitialData = {
    byId: {
      '1': {
        name: '시리우스',
        _id: '2',
        likes: [],
        content: '해리 넌 아빠를 닮았구나',
      },
    },
    allIds: ['1'],
  };
  const testForumData = [
    { name: '고일', _id: '2', likes: [] },
    { name: '크레그', _id: '1', likes: [] },
  ];

  const teamData = {
    name: '그리핀드로',
    forum: testForumData,
  };

  const testPost = { name: '덤블도어', _id: '3', likes: [] };
  const updatePost = { id: '1', content: '해리 넌 엄마도 닮았구나' };
  const likesData = {
    postId: '1',
    likes: ['userId'],
  };

  it('should handle initial state', () => {
    expect(forum(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCH_TEAM_DATA', () => {
    expect(forum(undefined, { type: FETCH_TEAM_DATA, team: teamData })).toEqual(
      {
        byId: {
          '1': { name: '크레그', _id: '1', likes: [] },
          '2': { name: '고일', _id: '2', likes: [] },
        },
        allIds: ['1', '2'],
      }
    );
  });

  it('should handle FETCH_FORUM_DATA', () => {
    expect(
      forum(undefined, { type: FETCH_FORUM_DATA, forum: testForumData })
    ).toEqual({
      byId: {
        '1': { name: '크레그', _id: '1', likes: [] },
        '2': { name: '고일', _id: '2', likes: [] },
      },
      allIds: ['1', '2'],
    });
  });

  it('should handle ADD_POST', () => {
    expect(forum(undefined, { type: ADD_POST, post: testPost })).toEqual({
      byId: {
        '3': { name: '덤블도어', _id: '3', likes: [] },
      },
      allIds: ['3'],
    });
  });

  it('should handle UPDATE_POST', () => {
    expect(
      forum(updateInitialData, { type: UPDATE_POST, data: updatePost })
    ).toEqual({
      byId: {
        '1': {
          name: '시리우스',
          _id: '2',
          likes: [],
          content: '해리 넌 엄마도 닮았구나',
        },
      },
      allIds: ['1'],
    });
  });

  it('should handle DELETE_POST', () => {
    expect(
      forum(updateInitialData, { type: DELETE_POST, postId: '1' })
    ).toEqual({
      byId: {
        '1': {
          name: '시리우스',
          _id: '2',
          likes: [],
          content: '해리 넌 아빠를 닮았구나',
        },
      },
      allIds: [],
    });
  });

  it('should handle UPDATE_LIKES', () => {
    expect(
      forum(updateInitialData, { type: UPDATE_LIKES, data: likesData })
    ).toEqual({
      byId: {
        '1': {
          name: '시리우스',
          _id: '2',
          likes: ['userId'],
          content: '해리 넌 아빠를 닮았구나',
        },
      },
      allIds: ['1'],
    });
  });

  it('should handle LOG_OUT', () => {
    expect(forum(updateInitialData, { type: LOG_OUT })).toEqual({
      ...initialState,
    });
  });
});
