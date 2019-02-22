import sqlite3 from "sqlite3";
import * as app from "../app";

export class SQLite {
    public db: any;

    constructor() {
        this.db  = new sqlite3.Database(app.settings.sqlite);
    }

    // for queries
    public query = (q: string): any => {
        const data = new Array<any>();
        this.db.each(q, (err: any, row: any) => {
            data.push( row );
        });

        return data;
    }

    // for updates
    public statement = (q: string, params: any): boolean => {
        let success: boolean = true;
        this.db.run(q, params, (err: any, row: any) => {
            if (err) {
                success = false;
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
