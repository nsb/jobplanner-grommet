import { observable, computed, action } from "mobx";

import CommonStore from "./CommonStore";

interface IJwtAuth {
    token: string;
}

class JwtAuth implements IJwtAuth {
    token: string = null;
}

class AuthStore extends CommonStore implements IJwtAuth {
    @observable token: string = null;

    @computed get isLoggedIn(): boolean {
        return !!this.token;
    }

    constructor() {
        super();
        this.setToken(localStorage.getItem("token"));
    }

    @action setToken(token: string): void {
        this.token = token;
        localStorage.setItem("token", token);
    }

    login(username: string, password: string, rememberMe: boolean): Promise<AuthStore> {

        return fetch("http://localhost:8000/api-token-auth/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password,
            })
        }).then(res => {
            return res.json() as Promise<IJwtAuth>;
        }).then(json => {
            this.setToken(json.token);
            return this;
        });
    }

    logout(): void {
        // Storage.remove('token');
    }
}

export default AuthStore;
