import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { store, history } from './redux/store'
import Routes from './router'

it('renders without crashing', () => {
  const div = document.createElement('root');
  ReactDOM.render(<Provider store={store}>
    <Routes history={history} />
  </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
