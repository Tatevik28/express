import {IUser} from "../interfaces/UserInterface";
import NotFoundException from "../exceptions/NotFoundException";
import UsersRepository from "../repositories/UsersRepository";

const usersRepository = new UsersRepository();


export default class UserService {
    async getAll(): Promise<IUser[]> {
        return await usersRepository.get();
    }

    async create(data: IUser): Promise<IUser> {
        return await usersRepository.create(data);
    }

    async update(id: number, data: IUser): Promise<IUser> {
        const user: IUser | undefined = await usersRepository.find(id);
        if (!user) {
            throw new NotFoundException("User not found");
        }

        return usersRepository.update(id, data);
    }


    async getById (id: number): Promise<IUser> {
        const user: IUser | undefined = await usersRepository.find(id);
        if (!user) {
            throw new NotFoundException("User not found");
        }

        return user;
    }

    async delete (id: number): Promise<number> {
        return await usersRepository.delete(id);
    }

    async activate (id: number): Promise<IUser> {
        const user: IUser | undefined = await usersRepository.find(id);
        if (!user) {
            throw new NotFoundException("User not found");
        }

        user.status = true;
        await usersRepository.update(id, user);

        return user;
    }
}

