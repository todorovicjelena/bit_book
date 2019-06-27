import { UserPost } from '../entities/UserPost'

class PostService {
    FetchPosts = () => {
        const request = 'https://book-api.hypetech.xyz/v1/posts'
        return fetch(request, {
            headers: {

                'Content-Type': 'application / json',
                'x-api-key': 'B1tD3V'
            }

        })
            .then(response => response.json())
            .then(posts => {

                const UserPosts = posts.map(post => new UserPost(post))
                return UserPosts
            })


    }
    FetchSinglePosts = (id) => {
        const request = `https://book-api.hypetech.xyz/v1/posts/${id}`
        return fetch(request, {
            headers: {

                'Content-Type': 'application / json',
                'x-api-key': 'B1tD3V'
            }

        })
            .then(response => response.json())
            .then(post => {
                const UserPosts = new UserPost(post)
                return UserPosts
            })


    }
}

export const postservices = new PostService

