import { PostFeed } from '../app/pages/post/PostFeed'

class PostService {
    FetchPosts = () => {
        const request = 'https://book-api.hypetech.xyz/v1/posts'
        fetch(request, {
            headers: {

                'Content-Type': 'application / json',
                'x-api-key': 'B1tD3V'
            }

        })
            .then(response => response.json())
            .then(posts => {
                console.log(posts);

            })


    }
}

export const postservices = new PostService


