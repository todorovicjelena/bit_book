import { MyUser } from '../entities/MyUser'


export class UserService {
    static fetchUsers = () => {
        const request = 'https://book-api.hypetech.xyz/v1/users';
        return fetch(request, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "B1tD3V"
            }

        })

            .then(response => response.json())
            .then(users => {
                const UsersInfo = users.map(user => new MyUser(user))
                return UsersInfo
            })

    }

    static fetchProfilePic = (id) => {
        const request = `https://book-api.hypetech.xyz/v1/users/${id}`;
        return fetch(request, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "B1tD3V"
            }
        })

            .then(response => response.json())
            .then(user => {
                console.log(user);

                const UserInfo = new MyUser(user)
                return UserInfo
            })
    }


}


