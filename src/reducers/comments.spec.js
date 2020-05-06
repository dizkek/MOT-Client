import comments from './comments';
import {
  FETCH_COMMENTS,
  ADD_COMMENT,
  DELETE_COMMENT,
  LOG_OUT,
} from '../constants';

describe('loading reducer', () => {
  const initialState = {
    byId: {},
    allIds: [],
  };

  const testComments = [
    { content: '오늘 퀴디치 경기 없습니다', _id: '1' },
    { content: '내일은 경기입니다', _id: '2' },
  ];

  const testComment = { content: '내일 날씨가 흐립니다', _id: '3' };

  const deleteInitalstate = {
    byId: { '3': testComment },
    allIds: ['3'],
  };

  const testCommentId = { commentId: '3' };

  it('should handle initial state', () => {
    expect(comments(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCH_COMMENTS', () => {
    expect(
      comments(undefined, { type: FETCH_COMMENTS, comments: testComments })
    ).toEqual({
      byId: {
        '1': { content: '오늘 퀴디치 경기 없습니다', _id: '1' },
        '2': { content: '내일은 경기입니다', _id: '2' },
      },
      allIds: ['1', '2'],
    });
  });

  it('should handle ADD_COMMENT', () => {
    expect(
      comments(undefined, { type: ADD_COMMENT, comment: testComment })
    ).toEqual({
      byId: {
        '3': { content: '내일 날씨가 흐립니다', _id: '3' },
      },
      allIds: ['3'],
    });
  });

  it('should handle DELETE_COMMENT', () => {
    expect(
      comments(deleteInitalstate, { type: DELETE_COMMENT, data: testCommentId })
    ).toEqual({
      byId: {
        '3': testComment,
      },
      allIds: [],
    });
  });

  it('should handle LOG_OUT', () => {
    expect(comments(deleteInitalstate, { type: LOG_OUT })).toEqual({
      ...initialState,
    });
  });
});
