import {setBadgeOwnership} from './dealers';
const badgesApiUrl = "https://x-force-app.firebaseio.com/";

//for later to show all users and their badges

export const getBadges = () =>
  fetch(badgesApiUrl + "/badges.json")
    .then(response => response.json())
    // .then(badges =>
    //   Object.entries(badges || {}).map(([id, value]) => ({
    //     id,
    //     ...value
    //   }))
    // );

export const addBadge = (dealerId, badgeData) => 
  fetch(badgesApiUrl + "/badges.json", {
    method: "POST",
    body: JSON.stringify({
      ...badgeData,
      badgeOwnerIds: {[dealerId]: true}
    }),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(
    response => response.json()
  ).then(
    ({name: badgeId}) => setBadgeOwnership(dealerId, badgeId)
  )


  //for later to delate trainer in seting

// export const deleteTrainer = trainerId =>
//   fetch(badgesApiUrl + "/badges/" + userId + ".json", {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json"
//     }
//   });

export const updateBadges = (badgesId, title, description, logo, moreInfo) =>
  fetch(badgesApiUrl + "/badges/" + badgesId + ".json", {
    method: "PATCH",
    body: JSON.stringify({
      title,
      description,
      logo,
      moreInfo
    }),
    headers: {
      "Content-Type": "application/json"
    }
  });
