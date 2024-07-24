import signUpUser from "./4-user-promise.js";
import uploadPhoto from "./5-photo-reject.js";
/* eslint-disable no-unused-vars */
/* eslint-disable */

export default function handleProfileSignup(firstName, lastName, fileName) {
  let firstname = signUpUser(firstName, lastName);
  let file = uploadPhoto(fileName);

  return Promise.allSettled([user, file]).then((result) =>
    result.map((obj) => ({
      status: obj.status,
      value: obj.status === "fulfilled" ? obj.value : obj.reason,
    }))
  );
}
