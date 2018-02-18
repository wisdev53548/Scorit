import React from 'react'
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor'
import { Tracker } from 'meteor/tracker'

import { Players } from './../imports/api/players'

Tracker.autorun(() => {
  console.log('Player list', Players.find().fetch())
})

const players = [
  {
    _id: 1,
    name: 'Tom',
    score: 100
  },
  {
    _id: 2,
    name: 'Jack',
    score: 93
  },
  {
    _id: 3,
    name: 'Michael',
    score: 62
  }
]

const renderPlayers = playerList => {
  return playerList.map(player => {
    return <h3 key={player._id}>{player.name} has {player.score} point(s)</h3>
  })
}

Meteor.startup(() => {
  let title = <h1>Scorit!</h1>
  let userName = 'Jack'
  let jsx = (
    <div>
      {title}
      <h2>Good to see ya, {userName}</h2>
      <p>Here are the scores so far:</p>
      {renderPlayers(players)}
    </div>
  )
  ReactDOM.render(jsx, document.getElementById('app'))
})