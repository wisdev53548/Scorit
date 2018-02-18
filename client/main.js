import React from 'react'
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor'
import { Tracker } from 'meteor/tracker'
import { Players } from './../imports/api/players'

const renderPlayers = playerList => {
  return playerList.map(player => {
    return (
      <h3 key={player._id}>
        {player.name} has {player.score} point(s)
        <button onClick={() => Players.remove({_id: player._id})}>Remove</button>
      </h3>
    )
  })
}

const handleSubmit = e => {
  e.preventDefault();
  const playerName = e.target.playerName.value
  if (playerName) {
    e.target.playerName.value = '';
    Players.insert({
      name: playerName,
      score: 0
    })
  }
}

Meteor.startup(() => {
  Tracker.autorun(() => {
    const players = Players.find().fetch()
    const title = 'Scorit!'
    let userName = 'Jack'
    let jsx = (
      <div>
        <h1>{title}</h1>
        <p>Here are the scores so far:</p>
        {renderPlayers(players)}
        <form onSubmit={handleSubmit}>
          <input type="text" name="playerName" placeholder="Player Name" /> 
          <button>Add Player</button>
        </form>
      </div>
    )
    ReactDOM.render(jsx, document.getElementById('app'))
  })
})