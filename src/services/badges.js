import { setBadgeOwnership } from "./dealers";
import firebase from "firebase";
import {rootRef} from '../setupFirebase';

export const getBadges = () => rootRef.child('badges').once("value").then(snapshot => snapshot.val());

export function addBadge(dealerId, badgeData) {
  
  return firebase
    .database()
    .ref("badges/")
    .push({
      ...badgeData,
      badgeOwnerIds: { [dealerId]: true }
    })
    .then(ref => {
      setBadgeOwnership(dealerId, ref.toString().substring((ref.root.toString()+'badges/').length))
    });
}

export const updateBadges = (badgesId, title, description, logo, moreInfo) =>
  firebase.database.ref(`badges/${badgesId}`).update({
    title,
    description,
    logo,
    moreInfo
  });
