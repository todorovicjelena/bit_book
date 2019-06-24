export class UserPost {
    constructor(user) {
        this.id = user.id;
        this.type = user.type;
        this.userId = user.userId;
        this.videoUrl = user.videoUrl
        this.sid = user.sid
        this.url = user.imageUrl
        this.isPublic = user.isPublic
        this.text = user.text
    }

}