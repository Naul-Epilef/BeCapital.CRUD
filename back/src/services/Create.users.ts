import { getRepository } from "typeorm";
import { v4 } from "uuid";

import User from "../models/User";

interface Request {
  name: string;
  email: string;
}

class Create {
  public async execute({ name, email }: Request): Promise<User> {
    const userRepository = getRepository(User);

    const user = (await userRepository.findOne({ name, email })) as User;

    if (user) {
      return user;
    }

    const newUser = userRepository.create({
      id: v4(),
      name,
      email,
    });

    userRepository.save(newUser);

    return newUser;
  }
}

export default Create;
