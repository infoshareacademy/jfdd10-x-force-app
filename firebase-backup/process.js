var data = require('./x-force-app-export.json')

var badges = data.badges.reduce((result, {id, IdTrainerWhoCanGiveThisBadge, ...next}) => {
    result[id] = {
        ...next,
        badgeOwnerIds: IdTrainerWhoCanGiveThisBadge.reduce((result, next) => {
            result[next] = true
            return result
        }, {})
    }
    return result;
}, {})

var trainers = data.trainers.reduce((result, { id, listOfBadges, position: [ lat, lon ], ...next}) => {
    result[id] = {
        ...next,
        position: { lat, lon },
        badgeIds: listOfBadges.reduce((result, next) => {
            result[next] = true
          return result
        }, {})


    }
  return result
}, {})

console.log(JSON.stringify({ badges, trainers }))