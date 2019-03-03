import sqlite from "better-sqlite3";
import sqlite3 from "sqlite3";
import * as app from "../app";

export class SQLite {
    public db: any;
    public betterdb: any;

    constructor() {
        this.db  = new sqlite3.Database(app.settings.sqlite);
        this.betterdb = new sqlite(app.settings.sqlite);
    }

    // for queries
    public query = (q: string, params: any): any => {
        const rows = (params === null || params === undefined) ?
            this.betterdb.prepare(q).all() :
            this.betterdb.prepare(q).get(params);
        this.betterdb.close();
        return rows;
    }

    // for updates
    public statement = (q: string, params: any): boolean => {
        let success: boolean = true;
        this.db.run(q, params, (err: any, row: any) => {
            if (err) {
                success = false;
                this.close();
            } else {
                this.close();
            }
        });

        return success;
    }

    public close = (): void => {
        this.db.close((err: any) => {
            if (err) {
                // tslint:disable-next-line:no-console
                return console.error(err.message);
            }
        });
    }
}
