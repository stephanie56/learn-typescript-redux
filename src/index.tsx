import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app';

import { store } from './state/store';

import registerServiceWorker from './registerServiceWorker';

const AppComponent = () => (
  <Provider store={store}>
    <App/>
  </Provider>
);

ReactDOM.render(
  <AppComponent/>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
