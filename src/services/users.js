const usersApiUrl = "https://x-force-app.firebaseio.com/";

//the same like trainers

export const getUsers = () =>
  fetch(usersApiUrl + "/users.json")
    .then(response => response.json())
    .then(users =>
      Object.entries(users || {}).map(([id, value]) => ({
        id,
        ...value
      }))
    );

export const addUser = (name, surname) =>
  fetch(usersApiUrl + "/users.json", {
    method: "POST",
    body: JSON.stringify({
      name,
      surname
    }),
    headers: {
      "Content-Type": "application/json"
    }
  });

///the same like trainers

// export const deleteUser = userId =>
//   fetch(usersApiUrl + "/users/" + userId + ".json", {
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json"
//     }
//   });

export const updateUser = (userId, name, surname) =>
  fetch(usersApiUrl + "/users/" + userId + ".json", {
    method: "PATCH",
    body: JSON.stringify({
      name,
      surname
    }),
    headers: {
      "Content-Type": "application/json"
    }
  });
