import { Request, Response } from "express";

import AuthEntity from "../models/auth_model.js";
import AuthService from "../service/auth_service.js";

export default class AuthController {
  static async LoginController(req: Request, res: Response) {
    try {
      const { username, password } = req.body;

      if (!username || !password) {
        throw new Error("Username and password are required");
      }

      const authData = new AuthEntity(
        username,
        password,
      );

      const result =
        await AuthService.LoginService(authData);

      return res.status(200).json({
        success: true,
        message: "Login successful",
        data: result,
      });
    } catch (error) {
      return res.status(401).json({
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Login failed",
      });
    }
  }
}