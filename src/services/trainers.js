const trainerApiUrl = "https://x-force-app.firebaseio.com/";

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

export const addTrainer = (name, surname, badges, description, avatar, length) =>
  fetch(trainerApiUrl + "/trainers.json", {
    method: "POST",
    body: JSON.stringify({
      name,
      surname,
      badges,
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

export const updateTrainer = (trainerId, name, surname, badges, description, avatar, dealerId) =>
  fetch(trainerApiUrl + "/trainers/" + trainerId + ".json", {
    method: "PATCH",
    body: JSON.stringify({
      name,
      surname,
      badges,
      description,
      avatar,
      listOfBadges: [dealerId]

    }),
    headers: {
      "Content-Type": "application/json"
    }
  });
