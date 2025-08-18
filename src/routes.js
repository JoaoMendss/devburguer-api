import { Router } from "express";
import multer from "multer"; 
import multerConfig from "./config/multer";

import UserController from "./app/controller/UserController";
import SessionController from "./app/controller/SessionController";
import ProductController from "./app/controller/ProductController";

const routes = new Router();

const upload = multer(multerConfig);

routes.post("/users", UserController.store);
routes.post("/session", SessionController.store);
routes.post("/products", upload.single("file"), ProductController.store);

export default routes;
// This file defines the routes for the DevBurger API. It currently has a single route that
