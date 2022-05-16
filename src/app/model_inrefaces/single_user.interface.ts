import {IUser} from "./user.interface";

export interface ISingleUser extends IUser {
  address: IAddress
  phone: string,
  website: string,
  company:ICompany
}

interface IAddress{
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: IGeo
}

interface ICompany{
  name: string,
  catchPhrase: string,
  bs: string
}
 interface IGeo{
   lat: number,
   lng: number
 }
