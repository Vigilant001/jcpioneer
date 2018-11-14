import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill'; //fixes IE issues
//import 'bootstrap/dist/css/bootstrap.min.css';
// https://bootswatch.com/slate/
import 'css/bootstrap_slate.min.css'; //import this bootstrap/theme combo
import 'css/grayscale.min.css'; //import this for some overrides from the grayscale theme
import 'css/custom.css';//custom overrides	
import {App} from 'components';
import registerServiceWorker from 'registerServiceWorker';
import { Provider } from 'mobx-react';
import dataState from 'stores/DataState';

//add brand icons
//import { library } from '@fortawesome/fontawesome-svg-core'
//import { fab } from '@fortawesome/free-brands-svg-icons'
//library.add(fab);


ReactDOM.render(<Provider dataState={dataState}>
	<App />
	</Provider>, document.getElementById('root'));
registerServiceWorker();
