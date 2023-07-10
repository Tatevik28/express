import {IUser} from "../interfaces/UserInterface";
import fs from 'fs';
import AppException from "../exceptions/AppException";

export default class UsersRepository {
    public async get(): Promise<IUser[]> {
        try {
            return JSON.parse(fs.readFileSync("users.json", "utf-8")) as IUser[];
        } catch (e) {
            console.log(e)
        }

        return [];
    }
    public async create(data: IUser): Promise<IUser> {
        const users: IUser[] = await this.get();
        const user: IUser = {
            ...data,
            creation_timestamp: Date.now().toString(),
            modification_timestamp: Date.now().toString(),
            status: false
        };

        users.push(user);

        await this.updateJson(users, "Creation error");

        return user;
    }

    public async find(id: number): Promise<IUser | undefined> {
        const users: IUser[] = await this.get();
        return users.find((user) => user.id === id);
    }

    public async update(id: number, data: IUser): Promise<IUser | undefined> {
        let users: IUser[] = await this.get();
        let updatedUser: IUser | undefined;
        users = users.map((user) => {
            if (user.id !== id) {
                return user;
            }

            updatedUser = {
                ...user,
                ...data,
                modification_timestamp: Date.now().toString(),
            };

            return updatedUser;
        });

        await this.updateJson(users, "Update error");

        return updatedUser;
    }

    public async delete(id: number): Promise<number> {
        const users: IUser[] = await this.get();
        const newUsers: IUser[] = users.filter((user: IUser) => user.id !== id);
        await this.updateJson(newUsers, "Delete error");

        return users.length - newUsers.length;
    }

    private async updateJson(data: IUser[], message: string = "Insert error"): Promise<boolean> {
        await fs.writeFile('users.json', JSON.stringify(data, null, 2), (err) => {
            if (err) {
                console.log(err);
                throw new AppException(message, 500);
            }
        })

        return true;
    }
}