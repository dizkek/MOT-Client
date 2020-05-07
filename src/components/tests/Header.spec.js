import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';

describe('Header component', () => {
  const component = shallow(
    <Header 
      teamname='그리핀도르'
      name='해리포터'
      admin='abcde'
      id='abcde'
    />
  );
  it('Li elements sholud have links with the teamname', () => {
     expect(component.find('Link').at(0).props().to).toBe('/teams/myteam/그리핀도르');
     expect(component.find('Link').at(1).props().to).toBe('/teams/myteam/그리핀도르/formation');
     expect(component.find('Link').at(2).props().to).toBe('/teams/myteam/그리핀도르/match');
     expect(component.find('Link').at(3).props().to).toBe('/teams/myteam/그리핀도르/forum');
     expect(component.find('Link').at(4).props().to).toBe('/teams/myteam/그리핀도르/finance');
  });

  it('Should display members menu when admin is logged in', ()=> {
    expect(component.find('Link').at(5).props().to).toBe('/teams/myteam/그리핀도르/members');
  });

  it('Should display user name with weclome text next to logout button', ()=> {
    expect(component.find('li').at(7).props().children[0]).toBe('Welcome ');
    expect(component.find('li').at(7).props().children[1]).toBe('해리포터');
  });

  it('Should not display when normal users are logged in', ()=> {
    const wrapper = shallow(
      <Header 
        teamname='그리핀도르'
        name='해리포터'
        admin='abcde'
        id='ccc'
      />
    );
    expect(wrapper.find('ul').at(0).props().children[6]).toBe(false);
  });
});
