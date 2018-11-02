import { setBadgeOwnership } from "./dealers";
import firebase from "firebase";
import {rootRef} from '../setupFirebase';
// const badgesApiUrl = "https://infoshare-da073.firebaseio.com/";

//for later to show all users and their badges
// export const getBadges = rootRef.child("badges");
// getBadges.once("value").then(function(snapshot) {
//   snapshot.forEach(function(childSnapshot) {
//     var key = childSnapshot.key;
//     var childData = childSnapshot.val();
//   });
// });

export const getBadges = () => rootRef.child('badges').once("value");
// fetch(badgesApiUrl + "/badges.json").then(response => response.json());

// .then(badges =>
//   Object.entries(badges || {}).map(([id, value]) => ({
//     id,
//     ...value
//   }))
// );

export function addBadge(dealerId, badgeData) {
  firebase
    .database()
    .ref("badges/")
    .push({
      ...badgeData,
      badgeOwnerIds: { [dealerId]: true }
    })
    .then(response => response.json())
    .then(({ name: badgeId }) => setBadgeOwnership(dealerId, badgeId));
}
// fetch(badgesApiUrl + "/badges.json", {
//   method: "POST",
//   body: JSON.stringify({
//     ...badgeData,
//     badgeOwnerIds: {[dealerId]: true}
//   }),
//   headers: {
//     "Content-Type": "application/json"
//   }
// }).then(
//   response => response.json()
// ).then(
//   ({name: badgeId}) => setBadgeOwnership(dealerId, badgeId)
// )

//for later to delate trainer in seting

// export const deleteTrainer = trainerId =>
//   fetch(badgesApiUrl + "/badges/" + userId + ".json", {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json"
//     }
//   });

export const updateBadges = (badgesId, title, description, logo, moreInfo) =>
  firebase.database.ref(`badges/${badgesId}`).update({
    title,
    description,
    logo,
    moreInfo
  });

// fetch(badgesApiUrl + "/badges/" + badgesId + ".json", {
//   method: "PATCH",
//   body: JSON.stringify({
//     title,
//     description,
//     logo,
//     moreInfo
//   }),
//   headers: {
//     "Content-Type": "application/json"
//   }
// });
