import { getRepository } from "typeorm";

import User from "../models/User";

interface Request {
  id: string;
}

class ListOne {
  public async execute({ id }: Request): Promise<User> {
    const userRepository = getRepository(User);

    const user = (await userRepository.findOne(id)) as User;

    return user;
  }
}

export default ListOne;
