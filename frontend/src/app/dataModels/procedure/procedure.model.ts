//import { Guid } from "guid-typescript";

export class Procedure {
  constructor(
  	public proc_id: string, // Will need to eventually change to Guid
  	public user_id: string, // Will need to eventually change to Guid
    public raw_xml: string,
    public procedure_name: string,
    public _saved_procedure?: string,
  ) { }
}