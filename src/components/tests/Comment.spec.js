import React from 'react';
import { shallow } from 'enzyme';
import Comment from '../Comment';

const comment = {
  name: '미네르바',
  _id: '1',
  content: '해리포터 당장 이리와',
  writer: 'abcd',
  postId: '35',
};

const userId = 'abcd';
const secondUserId = 'a';

;describe('Comment component', () => {
   it('should not render delete button when user is not a writer of the comment', () => {
    const component = shallow(
      <Comment 
        comment={comment}
        userId={secondUserId}
      />
      );
    expect(component.find('p').at(0).text()).toBe('미네르바: 해리포터 당장 이리와');
    expect(component.find('div').at(0).props().children[1]).toBe(false);
  });

  it('should not render delete button when user is not a writer of the comment', () => {
    const component = shallow(
      <Comment 
        comment={comment}
        userId={userId}
      />
      );
    expect(component.find('div').at(0).props().children[1]).toBeTruthy();
    expect(component.find('p').at(0).text()).toBe('미네르바: 해리포터 당장 이리와');
  });
});
