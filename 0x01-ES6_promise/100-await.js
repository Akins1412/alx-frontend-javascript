import { uploadPhoto, createUser } from "./utils.js";
export default async function asyncUploadUser() {
  try {
    let user = await createUser();
    let photo = await uploadPhoto();
    return { user, photo };
  } catch (error) {
    return { user: null, photo: null };
  }
}
