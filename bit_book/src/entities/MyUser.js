export class MyUser {
    constructor(apiUser) {
        this.about = apiUser.about;
        this.avatarUrl = apiUser.avatarUrl;
        this.createdAt = apiUser.createdAt;
        this.email = apiUser.email;
        this.id = apiUser.id;
        this.isPublic = apiUser.isPublic;
        this.nameFirst = apiUser.name.first;
        this.nameLast = apiUser.name.last;
        this.prefix = apiUser.name.prefix;
    }
}