


class RegisterService {
    fetchRegister = (name, email, pass) => {
        const body = {
            name: name,
            email: email,
            password: pass
        }
        console.log(body);
        const myStorage = window.localStorage;


        const register = 'https://book-api.hypetech.xyz/v1/auth/register'
        return fetch(register, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'B1tD3V'
            }

        })
            .then(response => response.json())
            .then(res => {
                localStorage.setItem('postToken', res.accessToken)

            })


    }

}

export const registerService = new RegisterService






