import * as React from 'react';
import Header from '../Header';
import { configure, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from '../../../redux/configureStore';
import * as Adapter from 'enzyme-adapter-react-16';
const adapter = Adapter as any;
configure({ adapter: new adapter() });
const store = configureStore();

describe('header snapshot', () => {
  it('header snapshot with page="auth"', () => {
    const tree = shallow(<Provider store={store}><Header page="auth"/></Provider>);
    expect(tree).toMatchSnapshot();
  });
  it('header snapshot with page="list"', () => {
    const tree = shallow(<Provider store={store}><Header page="auth"/></Provider>);
    expect(tree).toMatchSnapshot();
  });
  it('header snapshot with page="account"', () => {
    const tree = shallow(<Provider store={store}><Header page="auth"/></Provider>);
    expect(tree).toMatchSnapshot();
  });
});
