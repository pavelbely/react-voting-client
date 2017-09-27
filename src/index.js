import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import {Router, Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Voting from './components/Voting';
import Results from './components/Results';

const pair = ['Trainspotting', '28 Days Later'];

const routes = <Route component={App}>
    <Route path="/results" componebt={Results} />
    <Route path="/" component={Voting} />
</Route>;

ReactDOM.render(
    <BrowserRouter>
    {routes}
    </BrowserRouter>,
    document.getElementById('app')
);

registerServiceWorker();
