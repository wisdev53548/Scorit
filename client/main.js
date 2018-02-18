import React from 'react'
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor'
import { Tracker } from 'meteor/tracker'
import { Players } from './../imports/api/players'

const renderPlayers = playerList => {
  return playerList.map(player => {
    return <h3 key={player._id}>{player.name} has {player.score} point(s)</h3>
  })
}

Meteor.startup(() => {
  Tracker.autorun(() => {
    const players = Players.find().fetch()
    const title = 'Scorit!'
    let userName = 'Jack'
    let jsx = (
      <div>
        <h1>{title}</h1>
        <h2>Good to see ya, {userName}</h2>
        <p>Here are the scores so far:</p>
        {renderPlayers(players)}
      </div>
    )
    ReactDOM.render(jsx, document.getElementById('app'))
  })
  // Players.insert({
  //   name: 'Landon',
  //   score: 88
  // })
})