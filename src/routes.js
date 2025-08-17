import { Router } from "express";
import UserController from "./app/controller/UserController";

const routes = new Router();

routes.post("/users", UserController.store);

export default routes;
// This file defines the routes for the DevBurger API. It currently has a single route that
