import { Guid } from "guid-typescript";

export class Procedure {
  constructor(
  	public proc_id: Guid,
  	public user_id: Guid,
    public raw_xml: string,
    public procedure_name: string,
    public _saved_procedure?: string,
  ) { }
}