import express from "express";
import { home, Login, photos, profile } from "../controllers/homeControllers";

export const homeRouter = express.Router();

homeRouter.get("/", home);
homeRouter.get("/login", Login);
homeRouter.get("/photos", photos);
homeRouter.get("/profile", profile);
