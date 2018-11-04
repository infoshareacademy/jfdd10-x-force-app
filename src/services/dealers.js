import { rootRef } from "../setupFirebase";


export const getDealers = () => rootRef
  .child("dealers")
  .once("value")
  .then(snapshot => snapshot.val())

export const getDealer = dealerId =>
  rootRef
    .child("dealers")
    .child(dealerId)
    .once("value")
    .then(snapshot => snapshot.val())

export const addDealer = (name, surname, position, description, avatar) =>
  rootRef.child("dealers").push({
    name,
    surname,
    position,
    description,
    avatar
  });

export const setBadgeOwnership = (dealerId, badgeId) =>
  rootRef
    .child("dealers")
    .child(dealerId)
    .child("badgeIds")
    .update({
      [badgeId]: true
    });

export const updateDealer = (dealerId ,dealerData) =>
rootRef
    .child("dealers")
    .child(dealerId)
    .update({
      ...dealerData
    })
