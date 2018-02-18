import React from 'react'
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor'

Meteor.startup(() => {
  let title = <h1>Scorit!</h1>
  let userName = 'Jack'
  let jsx = (
    <div>
      <h1>{title}</h1>
      <h2>Good to see ya, {userName}</h2>
      <p>This is the world's #1 scoring app</p>
    </div>
  )
  ReactDOM.render(jsx, document.getElementById('app'))
})