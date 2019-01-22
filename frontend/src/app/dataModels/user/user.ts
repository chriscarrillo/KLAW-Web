export interface User {
    user_id: string, // Will need to eventually change to Guid
    email: string,
    first_name: string,
    last_name: string,
    password: string
}