import { Players } from './../imports/api/players'

Meteor.startup(() => {
  // Players.insert({
  //   name: 'Jagger',
  //   score: 86
  // })
  console.log(Players.find().fetch())
})