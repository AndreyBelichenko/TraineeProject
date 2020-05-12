import * as React from 'react';
import AccountPage from '../AccountPage';
import { configure, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from '../../../redux/configureStore';
import * as Adapter from 'enzyme-adapter-react-16';
const adapter = Adapter as any;
configure({ adapter: new adapter() });
const store = configureStore();

it('AccountPage snapshot', () => {
  const tree = shallow(<Provider store={store}><AccountPage /></Provider>);
  expect(tree).toMatchSnapshot();
});
