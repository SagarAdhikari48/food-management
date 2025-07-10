import express from "express";
import MyUserController from "../controllers/MyUserController";

const router = express.Router();

// GET api/my/user - Get current user
router.get("/", MyUserController.getCurrentUser);

// POST api/my/user - Create current user
router.post("/", MyUserController.createCurrentUser);

export default router;
