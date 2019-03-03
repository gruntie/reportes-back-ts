import * as cnt from "./constants";
import { SQLite } from "./sqlite";

export class Datos {
    public ConsultaUsuariosTodos = async (): Promise<any> => {
        const sql = new SQLite();
        return sql.query(cnt.CARGA_USUARIOS_TODOS, null);
    }

    public AltaUsuario = (datos: any[]): boolean => {
        const sql = new SQLite();
        return sql.statement(cnt.ALTA_USUARIO, datos);
    }

    public CargaUsuario = async (datos: any[]): Promise<any> => {
        const sql = new SQLite();
        return sql.query(cnt.CARGA_USUARIO, datos);
    }
}
