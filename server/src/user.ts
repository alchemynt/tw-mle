import * as mongodb from "mongodb";

export interface User{
    _id?: mongodb.ObjectId;
    user: string;
    password: string; //encryption? oauth?
    name: string;
    qlist: string; //list of questions asked
    qwrong: string; //list of questions answered incorrectly
    qflag: string; //list of questions flagged for further review
}