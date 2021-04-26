import React from 'react'
import ReactDOM from 'react-dom'

// apollo provider connection
import { ApolloProvider } from '@apollo/client'
import client from './apollo'

// redux store connection
import { Provider } from 'react-redux'
import store from './services'

// styles import
import './styles/index.scss'

import Routes from './routes'
import reportWebVitals from './utils/reportWebVitals'

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <Routes />
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
