//import { Guid } from "guid-typescript";

export class User {
  constructor(
  	public user_id: string, // Will need to eventually change to Guid
    public email: string,
    public first_name: string,
    public last_name: string,
    public password: string,
  ) { }
}