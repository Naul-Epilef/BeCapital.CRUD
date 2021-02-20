import { getRepository } from "typeorm";
import User from "../models/User";

interface Request {
  id: string;
}

interface Response {
  message: string;
}

class DeleteUser {
  public async execute({ id }: Request): Promise<Response> {
    const userRepository = getRepository(User);

    userRepository.delete(id);

    const response: Response = { message: "User deleted" };

    return response;
  }
}

export default DeleteUser;
