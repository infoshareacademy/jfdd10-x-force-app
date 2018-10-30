const trainerApiUrl = "https://infoshare-da073.firebaseio.com/";

//for later to show all users and their badges

export const getTrainers = () =>
  fetch(trainerApiUrl + "/trainers.json")
    .then(response => response.json())
    .then(trainers =>
      Object.entries(trainers || {}).map(([id, value]) => ({
        id,
        ...value
      }))
    );

export const addTrainer = (name, surname, position, description, avatar, length) =>
  fetch(trainerApiUrl + "/trainers.json", {
    method: "POST",
    body: JSON.stringify({
      name,
      surname,
      position,
      description,
      avatar,
      id: length + 1,
    }),
    headers: {
      "Content-Type": "application/json"
    }
  });

  //for later to delate trainer in seting

// export const deleteTrainer = trainerId =>
//   fetch(trainerApiUrl + "/trainers/" + userId + ".json", {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json"
//     }
//   });

export const updateTrainer = (trainerId, name, surname, position, description, avatar, badgeId) =>
  fetch(trainerApiUrl + "/trainers/" + trainerId + ".json", {
    method: "PATCH",
    body: JSON.stringify({
      name,
      surname,
      position,
      description,
      avatar,
      listOfBadges: [badgeId]

    }),
    headers: {
      "Content-Type": "application/json"
    }
  });
