import * as React from 'react';
import ListPage from '../ListPage';
import { configure, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from '../../../redux/configureStore';
import * as Adapter from 'enzyme-adapter-react-16';
const adapter = Adapter as any;
configure({ adapter: new adapter() });
const store = configureStore();

describe('<ListPage />', () => {
  let tree: any;
  it('ListPage snapshot', () => {
    tree = shallow(<Provider store={store}><ListPage /></Provider>);
    expect(tree).toMatchSnapshot();
  });
});
