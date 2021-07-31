export interface User {
    user_id: number,
    first_name:string;
    last_name:string;
    email:string;
    auth_token:string;
    status:string;
    is_active:boolean;
}