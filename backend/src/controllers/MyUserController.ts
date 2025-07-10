import { Request, Response } from "express";
import User from "../models/user";

const getCurrentUser = async (req: Request, res: Response) => {
  try {
    const { auth0Id } = req.query;
    const user = await User.findOne({ auth0Id });
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    
    return res.status(200).json(user.toObject());
  } catch (error) {
    console.error("Error getting current user:", error);
    return res.status(500).json({ message: "Error getting current user" });
  }
};

const createCurrentUser = async (req: Request, res: Response) => {
  try {
    const { auth0Id } = req.body;
    const existingUser = await User.findOne({ auth0Id });

    if (existingUser) {
      return res.status(200).json(existingUser.toObject());
    }

    const newUser = new User(req.body);
    await newUser.save();
    return res.status(201).json(newUser.toObject());
  } catch (error) {
    console.error("Error creating current user:", error);
    return res.status(500).json({ message: "Error creating current user" });
  }
};

export default {
  getCurrentUser,
  createCurrentUser,
};
