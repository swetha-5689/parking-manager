
import React from 'react';
import renderer from 'react-test-renderer';
import EditLayout from '../EditLayout';
it('should render nothing when there are no items', () => {
    const tree = renderer.create(<EditLayout/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
