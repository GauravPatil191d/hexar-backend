import jwt from "jsonwebtoken";

import AuthEntity from "../models/auth_model.js";
import AuthRepository from "../repository/auth_repository.js";

export default class AuthService {
  static async LoginService(authData: AuthEntity) {
    if (!authData.username || !authData.password) {
      throw new Error("Username and password are required");
    }

    const user =
      await AuthRepository.FindUserByCredentials(authData);

    if (!user) {
      throw new Error("Invalid username or password");
    }

    const secret = process.env.JWT_SECRET;

    if (!secret) {
      throw new Error("JWT_SECRET is not defined");
    }

    const token = jwt.sign(
      {
        userId: user._id.toString(),
        username: user.username,
      },
      secret,
      {
        expiresIn: "1d",
      },
    );

    return {
      token,
    };
  }
}