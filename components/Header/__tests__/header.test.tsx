// import * as React from "react";
// import Header from '../Header';
// // import * as actions from "../../../redux/actionCreators/userDataActionCreators";
// // import {assert, expect} from "jest";
// import {configure, shallow, mount} from "enzyme";
// import * as Adapter from 'enzyme-adapter-react-16';
// import {Provider} from "react-redux";
// import configureStore from "../../../redux/configureStore";
// const adapter = Adapter as any;
// configure({ adapter: new adapter() });
//
// const store = configureStore();

import * as React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import { configure, shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import rootSaga from '../../../redux/saga/rootSaga';
import Header from '../Header';

const sagaMiddleware = createSagaMiddleware();
const mockStore = configureMockStore([sagaMiddleware]);
const store = mockStore({});
sagaMiddleware.run(rootSaga);
const adapter = Adapter as any;
configure({ adapter: new adapter() });

describe('testing actions userDataActionCreators', () => {
  it('check month and years dropdowns displayed', () => {
    const DateInputComponent = shallow(<Provider store={store}>
      <Header page="auth" />
    </Provider>).dive();
    console.log('DateInputComponent', DateInputComponent.debug());
    expect(DateInputComponent.hasClass('auth')).toEqual(true);
  });
});
