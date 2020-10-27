import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route} from 'react-router-dom';
import {ApolloProvider, ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client';

declare var GITHUB_TOKEN: string;

const apolloLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
    headers: {
        authorization: `Bearer ${GITHUB_TOKEN}`
    }
});

const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: apolloLink,

    defaultOptions: {
        watchQuery: {
            errorPolicy: 'all'
        }
    }
});

ReactDOM.render(
    <ApolloProvider client={apolloClient}>
        <BrowserRouter>
            <Route path={'/'} render={App} />
        </BrowserRouter>
    </ApolloProvider>,

    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
