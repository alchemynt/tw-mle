import * as mongodb from "mongodb";

export interface Question {
    _id?: mongodb.ObjectId;
    question: string;
    optionA: string; 
    optionB: string; 
    optionC: string; 
    optionD: string; 
    answer: "a" | "b" | "c" | "d";
    explanation: string;
    //topic: string;
    //difficulty: "1" | "2" | "3" | "4" | "5"
}