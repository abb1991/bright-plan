import React from 'react'
import { render } from 'react-dom'
import Counter from './Counter'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import counterApp from './reducers'

let store = createStore(counterApp)

render(
    <Provider store={store}>
      <Counter />
    </Provider>
    ,
    document.getElementById('app')
  )

console.log('hello')