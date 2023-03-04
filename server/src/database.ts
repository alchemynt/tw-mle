import * as mongodb from "mongodb";
import { User } from "./user";
import { Question } from "./question";
import { Exam } from "./exam";

export const collections:{
    users?: mongodb.Collection<User>;
} = {};

export const collections:{
    exams?: mongodb.Collection<Exams>;
} = {};

export const collections:{
    questions?: mongodb.Collection<Question>;
} = {};

export async function connectToDatabase(uri: string) {
    const client = new mongodb.MongoClient(uri);
    await client.connect();

    const db = client.db("twmle");
    await applySchemaValidation(db);

    const usersCollection = db.collection<User>("users");
    collections.users = usersCollection;

    const examsCollection = db.collection<Exam>("exams");
    collections.exams = examsCollection;

    const questionsCollection = db.collection<Question>("questions");
    collections.questions = questionsCollection;
}

async function applySchemaValidation(db: mongodb.Db) {
    const userSchema = {
        $jsonSchema: {
            bsonType: "object",
            required: ["",""],
            additionalProperties: false,
            properties: {

            },
        },
    };
    const examSchema = {
        $jsonSchema: {
            bsonType: "object",
            required: ["",""],
            additionalProperties: false,
            properties: {

            },
        },
    };
    const questionSchema = {
        $jsonSchema: {
            bsonType: "object",
            required: ["",""],
            additionalProperties: false,
            properties: {

            },
        },
    };

    await db.command({
        collMod: "users",
       validator: userSchema
    }).catch(async (error: mongodb.MongoServerError) => {
       if (error.codeName === 'NamespaceNotFound') {
           await db.createCollection("users", {validator: userSchema});
       }
    });
    
    await db.command({
        collMod: "exams",
       validator: examSchema
    }).catch(async (error: mongodb.MongoServerError) => {
       if (error.codeName === 'NamespaceNotFound') {
           await db.createCollection("exams", {validator: examSchema});
       }
    });
    
    await db.command({
        collMod: "questions",
       validator: questionSchema
    }).catch(async (error: mongodb.MongoServerError) => {
       if (error.codeName === 'NamespaceNotFound') {
           await db.createCollection("questions", {validator: questionSchema});
       }
    });
}