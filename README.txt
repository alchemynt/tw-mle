Website to practice the Taiwan Medical License Exam

2/28/2023 - init
    > use gh repo create to create git repo from command line 
    > initialize .gitignore with *.env 
    > initialize MEAN server
        - /server, /server/src 
        - /server: npm init -y ; tsconfig.json, .env 
        - /server/src: database.ts, server.ts, sample.routes.ts, sample.ts
        - Install dependencies in /tw-mle 
            * npm install cors dotenv express mongodb
            * npm install --save-dev typescript @types/cors @types/express @types/node ts-node
        - basic tsconfig.json to compile TypeScript 
    
    > ** TODO: create interface(s) on server side **
        - question, exam, ??TBD??

    > Connect to the database 
        - ** TODO: set up json schema validation
        - ** TODO: set up collections config (tables?)
    
    > set up ATLAS_URI in server/.env 
    > set up connection to EXPRESS server

03/04/2023
    > create interface(s) on server side:
        - Done/Updated: 
            * question - stores info for individual questions
            * exam -  stores history of exams for all users + exam details/options
        - New:
            * User - stores basic user information, used as relation to exams

    > connect to the database 
        - set up json schema validation for question, exam, user interfaces
        

03/05/2023
    > set up collections config in database.ts
    > test server connection to database 
        * confirm that twmle database is created
            + exams, questions, and users collections 
    > Start setting up RESTful API for database:
        - *Basic* GET, POST, PUT DELETE for each collection
