import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import QuetaApp from './QuetaApp';
import GrifApp from './GrifApp';

const urlParams = new URLSearchParams(window.location.search);
const businessName = urlParams.get('bn');
const whichPerson =  urlParams.get('who');

const App = whichPerson === 'queta' ? QuetaApp : GrifApp

ReactDOM.render(<App bn={ businessName } />, document.getElementById('root'));
