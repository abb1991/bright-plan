import React from 'react'
import { render } from 'react-dom'
import Risk from './Risk'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import riskApp from './reducers'

let store = createStore(
    riskApp,
    // allows for redux dev tools in chrome
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

render(
    <Provider store={store}>
      <Risk />
    </Provider>
    ,
    document.getElementById('app')
  )
