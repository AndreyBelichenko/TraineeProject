import * as React from 'react';
import AccountComponent from '../account';
import Auth from '../auth';
import ListComponent from '../list';
import { configure, shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
const adapter = Adapter as any;
configure({ adapter: new adapter() });

describe('testing pages', () => {
  let tree: any;
  it('AccountComponent snapshot', () => {
    tree = shallow(<AccountComponent />);
    expect(tree).toMatchSnapshot();
  });

  it('Auth snapshot', () => {
    tree = shallow(<Auth />);
    expect(tree).toMatchSnapshot();
  });

  it('ListComponent snapshot', () => {
    tree = shallow(<ListComponent />);
    expect(tree).toMatchSnapshot();
  });
});
