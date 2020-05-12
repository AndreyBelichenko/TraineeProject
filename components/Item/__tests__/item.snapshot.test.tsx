import * as React from 'react';
import Item from '../Item';
import { configure, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from '../../../redux/configureStore';
import * as Adapter from 'enzyme-adapter-react-16';
const adapter = Adapter as any;
configure({ adapter: new adapter() });
const store = configureStore();

describe('<Item />', () => {
  let props: any;
  let tree: any;
  it('Item snapshot', () => {
    props = {
      defaultKey: 'comments',
      followers: 42,
      following: 21,
    };
    tree = shallow(<Provider store={store}><Item {...props}/></Provider>);
    expect(tree).toMatchSnapshot();
  });

  it('Should not to be undefined component', () => {
    expect(tree).not.toBeUndefined();
  });
});
