import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root')); 
/* ReactDOM이 1개의 컴포넌트(App)을 render(출력)한다 App은 App.js에 있고 id가 root인 곳에 출력하는데 id가 루트인 
   곳은 index.html이다. 
*/
registerServiceWorker();
