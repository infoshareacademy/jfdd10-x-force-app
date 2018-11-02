import { setBadgeOwnership } from "./dealers";
import firebase from "firebase";
import {rootRef} from '../setupFirebase';

export const getBadges = () => rootRef.child('badges').once("value").then(snapshot => snapshot.val());

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

export const updateBadges = (badgesId, title, description, logo, moreInfo) =>
  firebase.database.ref(`badges/${badgesId}`).update({
    title,
    description,
    logo,
    moreInfo
  });
