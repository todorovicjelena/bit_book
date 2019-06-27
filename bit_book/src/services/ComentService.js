import { MyComment } from '../entities/MyComment'

class CommentService {
    fetchService(id) {

        const request = `https://book-api.hypetech.xyz/v1/posts/${id}/comments`
        return fetch(request, {
            headers: {

                'Content-Type': 'application / json',
                'x-api-key': 'B1tD3V'
            }

        })
            .then(response => response.json())
            .then(comments => {
                const userComments = comments.map(comment => new MyComment(comment))
                return userComments

            })

    }
    fetchUserOfComment(id) {
        console.log(id);

        const request = `https://book-api.hypetech.xyz/v1/users/${id}`
        return fetch(request, {
            method: 'GET',
            headers: {

                'Content-Type': 'application / json',
                'x-api-key': 'B1tD3V'



            }

        })
            .then(response => response.json())
            .then(res => {
                console.log(res);

            })
    }







}
export const commentservices = new CommentService