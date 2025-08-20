import { Router } from "express";
import multer from "multer"; 
import multerConfig from "./config/multer";
import authMiddleware from "./app/middlewares/auth";

import UserController from "./app/controller/UserController";
import SessionController from "./app/controller/SessionController";
import ProductController from "./app/controller/ProductController";
import CategoryController from "./app/controller/CategoryController";

const routes = new Router();

const upload = multer(multerConfig);

routes.post("/users", UserController.store);
routes.post("/session", SessionController.store);

routes.use(authMiddleware); //todas as rotas abaixo daqui precisa do middleware
routes.post("/products", upload.single("file"), ProductController.store);
routes.get("/products", ProductController.index);

routes.post("/categories", CategoryController.store);
routes.get("/categories", CategoryController.index);

export default routes;

// request -> middleware -> controller -> model -> database -> response

// This file defines the routes for the DevBurger API. It currently has a single route that
