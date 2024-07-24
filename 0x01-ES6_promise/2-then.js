export default function handleResponseFromAPI(promise) {
  promise
    .then((reslove) => ({ status: 200, body: "Success" }))
    .catch((err) => Error())
    .finally(console.log("Got a response from the API"));
}
