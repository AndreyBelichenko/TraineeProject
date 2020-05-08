import * as React from "react";
import 'semantic-ui-css/semantic.min.css'
import configureStore from '../redux/configureStore';
import {Provider} from "react-redux";

const store = configureStore();

function MyApp({ Component, pageProps }) {
    return <Provider store={store}><Component {...pageProps} /></Provider>;
}

export default MyApp;