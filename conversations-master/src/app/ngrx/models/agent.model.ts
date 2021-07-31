export interface Agent {
    user_name: string,
    user_password: string;
    user_dn?: string;
    rq_clientId?: string;
    rq_windowId?: number;
    token: string;
    loggedIn: boolean;
}