

class RegisterService {
    fetchRegister = (name, email, pass) => {
        const body = {
            name: name,
            email: email,
            password: pass
        }
        console.log(body);
        
        
        const register = 'https://book-api.hypetech.xyz/v1/auth/register'
        return fetch(register, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'B1tD3V'
            }
            
        })
        .then(response => {
            console.log(response.status);
            
             if (response.status > 400){
                return Promise.reject('greska')
            }
            return response.json()   
            
        })
    }

    fetchLogin = (email, password) => {

        const body = {
            email: email,
            password: password
        }
        console.log(body);

        

        const login = 'https://book-api.hypetech.xyz/v1/auth/login'
        return fetch(login, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'B1tD3V'
            }
        })
        .then(response => {
            console.log(response);
            
            })
            
        



    }

}


export const registerService = new RegisterService






