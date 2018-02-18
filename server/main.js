import { Players } from './../imports/api/players'

Meteor.startup(() => {
  Players.insert({
    name: 'Michael',
    score: 53
  })
  console.log(Players.find().fetch())
})