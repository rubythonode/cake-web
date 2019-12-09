import React from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';

import Root from './client/Root';
import * as serviceWorker from './serviceWorker';

import './global.scss';

ReactModal.setAppElement('#root');

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();
