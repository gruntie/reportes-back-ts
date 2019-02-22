import * as cnt from "./constants";
import { SQLite } from "./sqlite";

export class Datos {
    public AltaUsuario = (datos: any[]): boolean => {
        const sql = new SQLite();
        return sql.statement(cnt.ALTA_USUARIO, datos);
    }
}
