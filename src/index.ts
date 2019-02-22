import cors from "cors";
import express from "express";
import * as r from "./routes";

const app = express();
const port = 8080;
// npm run start
app.use(express.json());
app.use(express.urlencoded({extended: true}));
r.Routes(app, cors);

app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
});
