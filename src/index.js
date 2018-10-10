import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import BadgeList from './components/BadgeList/BadgeList';
import BadgeListItem from './components/BadgeListItem/BadgeListItem';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<BadgeList />, document.getElementById('root'));
// ReactDOM.render(<BadgeListItem />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
