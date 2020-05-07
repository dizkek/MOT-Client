import React from 'react';
import { shallow } from 'enzyme';
import ChartBox from '../ChartBox';

const data = ['1', '2', '3']
const detailData = ['1', '2', '3'];

const finances = {
  allIds: ['1', '2'],
};

const index = 1;
const secondIndex = 0;

describe('ChartBox component', () => {
  it('Prev button should not be rendered when index final index of the array', () => {
    const component = shallow(
      <ChartBox 
        data={data} 
        detailData={detailData}
        finances={finances}
        financeIndex={index}
      />
    );
    expect(component.find('div').at(3).props().children).toBe(false);
    expect(component.find('Button').at(0).props().children).toBe('Next');
  });

  it('Next button should not be rendered when index is 0', () => {
    const component = shallow(
      <ChartBox 
        data={data} 
        detailData={detailData}
        finances={finances}
        financeIndex={secondIndex}
      />
    );
    expect(component.find('div').at(4).props().children).toBe(false);
    expect(component.find('Button').at(0).props().children).toBe('Prev');
  });
});
