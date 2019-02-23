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
    // public query = (q: string): any => {
    //     const data = new Array<any>();
    //     this.db.each(q, (err: any, row: any) => {
    //         data.push( row );
    //     });

    //     return data;
    // }

    // public query = (q: string, callback: any): void => {
    //     const data = new Array<any>();
    //     this.db.each(q, (err: any, row: any) => {
    //         if (err) {
    //             throw err;
    //         } else {
    //             data.push( row );
    //         }
    //     }, () => {
    //         callback(data);
    //         this.close();
    //     });
    // }

    // public query = (q: string): any => {
    //     const data = new Array<any>();
    //     this.db.all(q, [], (err: any, rows: any) => {
    //         if (err) {
    //             throw err;
    //         }

    //         rows.forEach((row: any) => {
    //             data.push(row);
    //         });

    //         // tslint:disable-next-line:no-console
    //         console.log(data);
    //     });

    //     // tslint:disable-next-line:no-console
    //     console.log(data);
    //     this.close();
    //     return data;
    // }

    // for queries
    public query = (q: string): any => {
        const rows = this.betterdb.prepare(q).all();
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
