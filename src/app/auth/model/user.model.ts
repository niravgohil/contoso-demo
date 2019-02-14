import { Api, AuthODetail } from "~/app/config/api";

export class UserModel {
    id: string;
    username: string;
    email: string;
    password: string;

    constructor(data) {
        this.id = data.id || '';
        this.username = data.username || '';
        this.email = data.email || '';
        this.password = data.password || '';
    }
}

export class UserPostModel {
    client_id: string;
    email: string;
    password: string;
    connection: string;
    user_metadata: UserMetaDataModel;

    constructor(data) {
        this.client_id = data.client_id || '';
        this.email = data.email || '';
        this.password = data.password || '';
        this.connection = data.connection || '';
        this.user_metadata = data.user_metadata || new UserMetaDataModel({});
    }
}

export class UserMetaDataModel {
    username: string;

    constructor(data) {
        this.username = data.username || '';
    }
}


export class LoginPostModel {
    grant_type: string;
    username: string;
    password: string;
    scope: string;
    client_id: string;
    client_secret: string;
    connection: string;

    constructor(data) {
        this.grant_type = data.grant_type || 'password';
        this.username = data.username || '';
        this.password = data.password || '';
        this.scope = data.scope || 'openid';
        this.client_id = data.client_id || AuthODetail.clientID;
        this.client_secret = data.client_secret || AuthODetail.clientSecret;
        this.connection = data.connection || AuthODetail.connection;
    }
}