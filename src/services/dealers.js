const dealerApiUrl = "https://x-force-app.firebaseio.com/dealers";

export const getDealers = () =>
  fetch(`${dealerApiUrl}.json`)
    .then(response => response.json())
    // .then(dealers =>
    //   Object.entries(dealers || {}).map(([id, value]) => ({
    //     id,
    //     ...value
    //   }))
    // );

export const getDealer = dealerId =>
  fetch(`${dealerApiUrl}/${dealerId}.json`).then(response => response.json());

export const addDealer = (
  name,
  surname,
  position,
  description,
  avatar
) =>
  fetch(`${dealerApiUrl}.json`, {
    method: "POST",
    body: JSON.stringify({
      name,
      surname,
      position,
      description,
      avatar
    }),
    headers: {
      "Content-Type": "application/json"
    }
  });

export const setBadgeOwnership = (dealerId, badgeId) => 
  fetch(`${dealerApiUrl}/${dealerId}/badgeIds.json`, {
    method: "PATCH",
    body: JSON.stringify({
      [badgeId]: true
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })

export const updateDealer = (dealerId, dealerData) =>
  fetch(`${dealerApiUrl}/${dealerId}.json`, {
    method: "PATCH",
    body: JSON.stringify(dealerData),
    headers: {
      "Content-Type": "application/json"
    }
  });
