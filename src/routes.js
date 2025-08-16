import { Router } from "express";

const routes = new Router();

routes.get("/", (req, res) => {
	return res.status(200).json({ message: "Welcome to DevBurger API!" });
});

export default routes;
// This file defines the routes for the DevBurger API. It currently has a single route that
