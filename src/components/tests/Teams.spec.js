import React from 'react';
import { shallow } from 'enzyme';
import Teams from '../Teams';

const teams = {
  byId: {
    '1': { name: '바코', _id: '1' },
  },
  allIds: ['1'],
};

const emptyTeams = {
  byId: {},
  allIds: [],
};

describe('Teams component', () => {
  it('should not render teamLists when teams are empty', () => {
    const component = shallow(<Teams teams={emptyTeams} />);
    expect(component.find('Button').at(1).length).toBe(1);
    expect(component.find('Button').at(1).props().children).toBe('Log Out');
    expect(component.find('ul').at(0).props().children).toBe(false);
  });

  it('should not render teamLists when teams are empty', () => {
    const component = shallow(<Teams teams={teams} />);
    expect(component.find('ul').at(0).props().children.length).toBe(1);
    expect(component.find('ul').at(0).props().children[0].key).toBe('바코');
  });
});
