import { getClient } from "../../../config/db.js";
import AuthEntity from "../models/auth_model.js";

export default class AuthRepository {
  static async FindUserByCredentials(authData: AuthEntity) {
    const client =await getClient();

    return client.db("master").collection("hexar-users").findOne({
      username: authData.username,
      password: authData.password,
    });

   }
}