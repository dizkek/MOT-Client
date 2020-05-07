import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button';

let isClicked = false;

const onClickHandler = () => {
  isClicked = true;
};

const children = '버튼';
const style = {
  margin: '20px',
};

const type = 'text';

describe('Button component', () => {
   it('should work properly when it is clicked', () => {
    const component = shallow(
      <Button 
        onClickHandler={onClickHandler} 
        children={children}
        style={style}
        type={type}
      />
      );

    component.find('button').at(0).simulate('click');
    expect(isClicked).toBe(true);
    expect(component.find('button').at(0).text()).toBe('버튼');
    expect(component.find('button').at(0).props().style.margin).toBe('20px');
    expect(component.find('button').at(0).props().type).toBe('text');
  });
});
