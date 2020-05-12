import * as React from 'react';
import AuthPage from '../AuthPage';
import { configure, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from '../../../redux/configureStore';
import * as Adapter from 'enzyme-adapter-react-16';
const adapter = Adapter as any;
configure({ adapter: new adapter() });
const store = configureStore();

it('AuthPage snapshot', () => {
  const tree = shallow(<Provider store={store}><AuthPage /></Provider>);
  expect(tree).toMatchSnapshot();
});
