import React from 'react'
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor'

Meteor.startup(() => {
  let titleGreeting = <h1>Hello, and welcome to Skrit!</h1>
  let userName = 'Jack'
  let userGreeting = <p>Glad to see you back, {userName}!</p>
  ReactDOM.render(titleGreeting, document.getElementById('app'))
  ReactDOM.render(userGreeting, document.getElementById('greeting'))
})