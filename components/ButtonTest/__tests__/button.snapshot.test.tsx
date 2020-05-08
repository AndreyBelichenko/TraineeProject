import * as React from 'react';
import Button from '../Button';
import * as renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<Button buttonText="Some Text" />).toJSON();
  expect(tree).toMatchSnapshot();
});
