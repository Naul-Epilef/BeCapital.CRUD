import { Router } from "express";

import CreateUser from "../services/Create.users";
import ListOneUser from "../services/ListOne.users";
import DeleteUser from "../services/Delete.users";

const routes = Router();

routes.get("/:id", async (request, response) => {
  const { id } = request.params;
  const user = await new ListOneUser().execute({ id });
  response.json(user);
});

routes.post("/", async (request, response) => {
  const { name, email } = request.body;
  const newUser = await new CreateUser().execute({ name, email });
  response.json(newUser);
});

routes.delete("/:id", async (request, response) => {
  const { id } = request.params;
  const deletedResponse = await new DeleteUser().execute({ id });
  response.json(deletedResponse);
});

export default routes;
