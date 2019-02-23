import * as cnt from "./constants";
import { SQLite } from "./sqlite";

export class Datos {
    public ConsultaUsuariosTodos = async (): Promise<any> => {
        const sql = new SQLite();
        return sql.query(cnt.CARGA_USUARIOS_TODOS);
        // const sql = new SQLite();
        // let data;
        // await sql.query(cnt.CARGA_USUARIOS_TODOS, (rows: any) => {
        //     data = rows;
        //     // tslint:disable-next-line:no-console
        //     console.log(rows);
        //     return rows;
        // });
    }

    public AltaUsuario = (datos: any[]): boolean => {
        const sql = new SQLite();
        return sql.statement(cnt.ALTA_USUARIO, datos);
    }
}
