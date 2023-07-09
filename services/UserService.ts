import users from "../users.json";
import {IUser} from "../interfaces/UserInterface";
import fs from 'fs';
import NotFoundException from "../exceptions/NotFoundException";

const Users = users as IUser[];

export default class UserService {
    async create(data: IUser): Promise<IUser> {
        const user = data;
        user.creation_timestamp = Date.now().toString();
        Users.push(user);
        this.updateJson(Users);
        return user;
    }

    async update(id, data): Promise<IUser> {
        const user = Users.find(user => user.id == id);

        if (!user) {
            console.log("error")
            throw new NotFoundException("User not found");
        }

        Object.keys(data).forEach(item => {
            user[item] = data[item];
        })

        user.modification_timestamp = Date.now().toString();

        this.updateJson(Users);
        return user;
    }


    async getById (id: number):Promise<IUser> {
        const user = await Users.find(user => user.id === id) as IUser | undefined;
        if (!user) {
            console.log("error")
            throw new NotFoundException("User not found");
        }
        return user;
    }

    async delete (id: number): Promise<string> {
        const users = await Users.filter(user => user.id !== id) as Array<IUser> | undefined;
        console.log(users)
        if (users.length === Users.length) {
            console.log("error")
            throw new NotFoundException("User not found");
        }
        return "User was successfully deleted";
    }

    updateJson(users) {
        fs.writeFileSync('users.json', JSON.stringify(users, null, 2))
    }
}

