const trainerApiUrl = "https://x-force-app.firebaseio.com/";

//for later to show all users and their badges

// export const getUsers = () =>
//   fetch(trainerApiUrl + "/users.json")
//     .then(response => response.json())
//     .then(users =>
//       Object.entries(users || {}).map(([id, value]) => ({
//         id,
//         ...value
//       }))
//     );

export const addTrainer = (name, surname, badges, description, avatar) =>
  fetch(trainerApiUrl + "/users.json", {
    method: "POST",
    body: JSON.stringify({
      name,
      surname,
      badges,
      description,
      avatar
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

export const updateTrainer = (trainerId, name, surname, badges, description, avatar) =>
  fetch(trainerApiUrl + "/trainers/" + trainerId + ".json", {
    method: "PATCH",
    body: JSON.stringify({
      name,
      surname,
      badges,
      description,
      avatar
    }),
    headers: {
      "Content-Type": "application/json"
    }
  });
