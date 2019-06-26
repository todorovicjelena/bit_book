import React from 'react'


class RegisterService {
    fetchRegister = (data) => {
        const body = data
        console.log(body);

        const register = 'https://book-api.hypetech.xyz/v1/auth/register'
        fetch(register, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'B1tD3V'
            }

        })

    }






}

export const registerService = new RegisterService